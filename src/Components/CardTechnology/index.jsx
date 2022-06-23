import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";
import api from "../../data/api";
import { Container } from "./style";

function CardTechnology({ title, status, id, renderTechs, ...rest}) {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const deleteTech = () => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        renderTechs()
        toast.success("Technology deleted")
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container {...rest}>
      <h3>{title}</h3>
      <div className="divTechBtn">
        <span>{status}</span>
        <button className="btnTrash" onClick={deleteTech}>
          <BsTrash />
        </button>
      </div>
    </Container>
  );
}

export default CardTechnology;
