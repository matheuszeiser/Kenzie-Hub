import { useHistory } from "react-router";
import { ThemeTitle } from "../Register/style";
import { ContainerMain, Main } from "./style";

function Home() {
  const history = useHistory();

  const handleNav = (path) => {
    return history.push(path);
  };

  return (
    <ContainerMain>
      <Main>
        <ThemeTitle width="100%" margin="21.5px 0">
          <h1>Kenzie Hub</h1>
          <button onClick={() => handleNav("/")}>Sair</button>
        </ThemeTitle>
      </Main>
        <hr />
    </ContainerMain>
  );
}

export default Home;
