/* eslint-disable react-hooks/exhaustive-deps */
import { Redirect } from "react-router";
import { ThemeTitle } from "../Register/style";
import { ContainerList, Main, ThemeWelcome } from "./style";
import { BiPlus } from "react-icons/bi";
import CardTechnology from "../../Components/CardTechnology";
import { useEffect, useState } from "react";
import ModalAddTech from "../../Components/Modals/ModalAddTech";
import api from "../../data/api";

function Home({ auth, setAuth }) {
  const [techs, setTechs] = useState([]);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  const renderTechs = () => {
    api.get(`/users/${user.id}`, {}).then((resp) => {
      setTechs(resp.data.techs);
    });
  };

  const closeModalAdd = () => {
    setOpenModalAdd(false);
  };

  useEffect(() => {
    renderTechs();
  }, []);

  if (!auth) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <ModalAddTech
        techs={techs}
        setOpenModalAdd={setOpenModalAdd}
        openModalAdd={openModalAdd}
        handleClose={closeModalAdd}
        renderTechs={renderTechs}
      />
      <Main>
        <ThemeTitle width="900px" margin="21.5px 0">
          <h1>Kenzie Hub</h1>
          <button
            onClick={() => {
              setAuth(false);
              localStorage.removeItem("@KenzieHub:token");
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
            <button onClick={() => setOpenModalAdd(true)} className="btnAdd">
              <BiPlus />
            </button>
          </div>
          <section>
            {techs.length > 0 ? (
              techs?.map((tech) => (
                <CardTechnology
                  renderTechs={renderTechs}
                  key={tech.id}
                  id={tech.id}
                  title={tech.title}
                  status={tech.status}
                />
              ))
            ) : (
              <div>You don't have registered technologies</div>
            )}
          </section>
        </ContainerList>
      </Main>
    </>
  );
}

export default Home;
