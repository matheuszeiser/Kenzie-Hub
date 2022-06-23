import { Redirect, useHistory } from "react-router-dom";
import Button from "../../Components/Button";
import {
  Container,
  ContainerForm,
  FormCadastro,
  InputRegister,
  ThemeTitle,
} from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import api from "../../data/api";

function Register({ auth }) {
  const history = useHistory();

  const handleNav = (path) => {
    return history.push(path);
  };

  const schema = yup.object().shape({
    name: yup.string().required("Required field"),
    email: yup
      .string()
      .required("Required field")
      .email("Please, a valid email!"),
    password: yup
      .string()
      .required("Required field")
      .min(6, "minimum 6 caracters"),
    confirmPassword: yup
      .string()
      .required("Required field")
      .oneOf([yup.ref("password")], "Both password must be the same"),
    bio: yup.string().required("Required field"),
    contact: yup.string().required("Required field"),
    course_module: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const user = { name, email, password, bio, contact, course_module };
    const save = { email };
    api
      .post("/users", user)
      .then((_) => {
        localStorage.setItem("user", JSON.stringify(save));
        toast.success("Successful register")
        setTimeout(() => {
          history.push("/");
        }, 2800);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
      });
  };

  if (auth) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <ThemeTitle width="369px" margin="15px 0 0">
        <h1>Kenzie Hub</h1>
        <button onClick={() => handleNav("/")}>Back</button>
      </ThemeTitle>
      <ContainerForm>
        <FormCadastro onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Create Your Account</h2>
          <span>Fast and free, let's go!</span>
          <label>
            Name {!!errors.name?.message && <span> {errors.name.message}</span>}
          </label>
          <InputRegister
            error={!!errors.name?.message}
            placeholder="Type your name"
            {...register("name")}
          />
          <label>
            Email{" "}
            {!!errors.email?.message && <span> {errors.email.message}</span>}
          </label>
          <InputRegister
            error={!!errors.email?.message}
            placeholder="Your best email"
            {...register("email")}
          />
          <label>
            Password
            {!!errors.password?.message && (
              <span> {errors.password.message}</span>
            )}
          </label>
          <InputRegister
            error={!!errors.password?.message}
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <label>
            Confirm Password{" "}
            {!!errors.confirmPassword?.message && (
              <span> {errors.confirmPassword.message}</span>
            )}
          </label>
          <InputRegister
            error={!!errors.confirmPassword?.message}
            type="password"
            placeholder="Confirm your Password"
            {...register("confirmPassword")}
          />
          <label>
            Bio {!!errors.bio?.message && <span> {errors.bio.message}</span>}
          </label>
          <InputRegister
            error={!!errors.bio?.message}
            placeholder="About you"
            {...register("bio")}
          />
          <label>
            Contact{" "}
            {!!errors.contact?.message && (
              <span> {errors.contact.message}</span>
            )}
          </label>
          <InputRegister
            error={!!errors.contact?.message}
            placeholder="Option of contact"
            {...register("contact")}
          />
          <label>Select module</label>
          <select {...register("course_module")}>
            <option value="First Module (Introduction to Frontend)">
              First Module
            </option>
            <option value="Second Module (Advanced FrontEnd)">
              Second Module
            </option>
            <option value="Third Module (Introduction to BackEnd)">
              Third Module
            </option>
            <option value="Fourth Module (Advanced BackEnd)">
              Fourth Module
            </option>
          </select>
          <Button type="submit">Register</Button>
        </FormCadastro>
      </ContainerForm>
    </Container>
  );
}

export default Register;
