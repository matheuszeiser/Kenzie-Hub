import { BsTrash } from "react-icons/bs";
import { Container } from "./style";

function CardTechnology() {
  return (
    <Container>
      <h3>React JS</h3>
      <div className="divTechBtn">
        <span>Intermediary</span>
        <button className="btnTrash">
          <BsTrash />
        </button>
      </div>
    </Container>
  );
}

export default CardTechnology;
