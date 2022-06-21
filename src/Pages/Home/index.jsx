import { useHistory } from "react-router";
import { ThemeTitle } from "../Register/style";
import { ContainerList, Main, ThemeWelcome } from "./style";
import { BiPlus } from "react-icons/bi";
import CardTechnology from "./CardTechnology";

function Home() {
  const history = useHistory();

  const handleNav = (path) => {
    return history.push(path);
  };

  return (
    <Main>
      <ThemeTitle width="900px" margin="21.5px 0">
        <h1>Kenzie Hub</h1>
        <button onClick={() => handleNav("/")}>Exit</button>
      </ThemeTitle>
      <hr />
      <ThemeWelcome>
        <h2>Hello, Matheus Zeiser!</h2>
        <span>First Module</span>
      </ThemeWelcome>
      <hr />
      <ContainerList>
        <div className="divTech">
          <h3>Technologies</h3>
          <button className="btnAdd">
            <BiPlus />
          </button>
        </div>
        <section>
          <CardTechnology />
          <CardTechnology />
        </section>
      </ContainerList>
    </Main>
  );
}

export default Home;
