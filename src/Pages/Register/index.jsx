import { useHistory } from "react-router-dom";
import Button from "../../Components/Button";
import { Container, ContainerForm, FormCadastro, ThemeTitle } from "./style";

function Register() {
  const history = useHistory();

  const handleNav = (path) => {
    return history.push(path);
  };
  return (
    <Container>
      <ThemeTitle width="369px" margin="15px 0 0">
        <h1>Kenzie Hub</h1>
        <button onClick={() => handleNav("/")}>Voltar</button>
      </ThemeTitle>
      <ContainerForm>
        <FormCadastro>
          <h2>Crie sua conta</h2>
          <span>Fast and free, let's go!</span>
          <label>Name</label>
          <input placeholder="Type your name" />
          <label>Email</label>
          <input type="email" placeholder="Your best email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your Password" />
          <label>Bio</label>
          <input placeholder="About you" />
          <label>Contact</label>
          <input placeholder="Option of contact" />
          <label>Select module</label>
          <select placeholder="Type your name">
            <option value="">First Module</option>
            <option value="">Second Module</option>
            <option value="">Third Module</option>
            <option value="">Fourth Module</option>
          </select>
          <Button onClick={() => handleNav("/home")}>Register</Button>
        </FormCadastro>
      </ContainerForm>
    </Container>
  );
}

export default Register;
