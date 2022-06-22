import { Redirect } from "react-router";
import { ThemeTitle } from "../Register/style";
import { ContainerList, Main, ThemeWelcome } from "./style";
import { BiPlus } from "react-icons/bi";
import CardTechnology from "../../Components/CardTechnology";

function Home({ auth, setAuth }) {

  if (!auth) {
    return <Redirect to="/" />;
  }

  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"))

  return (
    <Main>
      <ThemeTitle width="900px" margin="21.5px 0">
        <h1>Kenzie Hub</h1>
        <button
          onClick={() => {
            setAuth(false);
            localStorage.removeItem("@KenzieHub:token")
          }}
        >
          Log Out
        </button>
      </ThemeTitle>
      <hr />
      <ThemeWelcome>
        <h2>Hello, {`${user.name}`}!</h2>
        <span>{`${user.course_module}`}</span>
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
