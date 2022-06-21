import { useHistory } from "react-router-dom";
import Button from "../../Components/Button";
import { Container, ContainerForm, FormLogin } from "./style";

function Login() {
  const history = useHistory();

  const handleNav = (path) => {
    return history.push(path);
  };
  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <ContainerForm>
        <FormLogin>
          <h2>Login</h2>
          <label>Email</label>
          <input placeholder="Your best email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <Button onClick={() => handleNav("/home")}>Login</Button>
          <span>Don't have a registration?</span>
          <Button graySchema onClick={() => handleNav("/Register")}>
            Register
          </Button>
        </FormLogin>
      </ContainerForm>
    </Container>
  );
}

export default Login;
