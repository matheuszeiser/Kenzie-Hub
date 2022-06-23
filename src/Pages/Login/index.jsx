import { Redirect, useHistory } from "react-router-dom";
import Button from "../../Components/Button";
import { Container, ContainerForm, FormLogin } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../data/api";
import { toast } from "react-toastify"

function Login({auth, setAuth}) {
  const history = useHistory();

  const handleNav = (path) => {
    return history.push(path);
  };

  const schema = yup.object().shape({
    email: yup.string().required("Required field!").email("Invalid email!"),
    password: yup.string().required("Required field!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
    
  const onSubmitFunction = (data) => {
    api.post("/sessions", data).then(resp => {
      const { token, user } = resp.data;

      localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

      localStorage.setItem("@KenzieHub:user", JSON.stringify(user))

      setAuth(true)

      return history.push("/home");
    }).catch((err) => toast.error("Verify your email or password"))
  };

  if(auth){
    return <Redirect to="/home"/>
  }

  const save = JSON.parse(localStorage.getItem("user"))

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <ContainerForm>
        <FormLogin onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>
          <label>Email {!!errors.email?.message && <span> - {errors.email.message}</span>}</label>
          <input value={save?.email} placeholder="email@mail.com" {...register("email")} />
          <label>Password {!!errors.password?.message && <span> - {errors.password.message}</span>}</label>
          <input type="password" placeholder="Password" {...register("password")}/>
          <Button type="submit" >Log In</Button>
          <span>Don't have a registration?</span>
          <Button
            graySchema
            onClick={() => handleNav("/Register")}
          >
            Register
          </Button>
        </FormLogin>
      </ContainerForm>
    </Container>
  );
}

export default Login;
