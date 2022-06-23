import React, { useState } from "react";
import Button from "../../Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlineClose } from "react-icons/ai";
import { CloseButton, Container, FormAddTech } from "./style";
import { useForm } from "react-hook-form";
import api from "../../../data/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

function ModalAddTech({ setOpenModalAdd, openModalAdd, handleClose, renderTechs }) {
  
  const schema = yup.object().shape({
    title: yup.string().required("Required field!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const addTech = ({ title, status }) => {
    api
      .post(
        `/users/techs`,
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        setOpenModalAdd(false);
        toast.success("Technology added successfully")
        renderTechs();
      }).catch(err => toast.error(`${err.response.data.message}`));
  };

  const submitForm = (data) => {
    addTech(data);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openModalAdd}
      >
        <Container>
          <DialogTitle
            sx={{
              backgroundColor: "#343B41",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "50px",
              color: "var(--white)",
              fontSize: "16px",
            }}
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Register Technology
            <CloseButton autoFocus onClick={handleClose}>
              <AiOutlineClose />
            </CloseButton>
          </DialogTitle>
          <FormAddTech
            onSubmit={handleSubmit(submitForm)}
            sx={{
              backgroundColor: "var(--gray3)",
              display: "flex",
              flexDirection: "column",
            }}
            dividers
          >
            <label>
              Technology{" "}
              {!!errors.title?.message && <span> {errors.title.message}</span>}
            </label>
            <input placeholder="Type the technology" {...register("title")} />
            <label>Select status</label>
            <select {...register("status")}>
              <option value="Beginner">Begineer</option>
              <option value="Intermediary">Intermediary</option>
              <option value="Experient">Experient</option>
            </select>
            <Button type="submit">Register Technology</Button>
          </FormAddTech>
        </Container>
      </Dialog>
    </div>
  );
}
export default ModalAddTech;
