import React, { useState } from "react";
import { Input } from "../Index";
import "./ClientRegistrationModal.css";
import { toast, ToastContainer } from "react-toastify";
import requestAPI from "../../requestAPI";

const ClientRegistrationModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      onClose();
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !cpf || !address) {
      return toast.error("Preencha todos os campos");
    }
    try {
      const response = await requestAPI("/clients/register", "POST", {
        name: name,
        telephone: phone,
        cpf: cpf,
        address: address,
      });

      console.log(response);
      if (response.error) {
        return toast.error(response.error);
      }

      setName("");
      setPhone("");
      setCpf("");
      setAddress("");

      return toast.success(response.status);
    } catch (error) {
      return toast.error("Erro no cadastro");
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <ToastContainer />
      <div className="modal-content-client-registration">
        <h3 style={{ textAlign: "center" }}>Cadastrar novo cliente</h3>
        <form className="modal-form" onSubmit={handleFormSubmit}>
          <div className="modal-column">
            <Input
              label="Nome completo"
              id="name"
              placeholder="Maria Madalena"
              className="input-style"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Celular"
              id="phone"
              placeholder="(19) 98787-2309"
              className="input-style"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="modal-column">
            <Input
              label="CPF"
              id="cpf"
              placeholder="223.221.876-14"
              className="input-style"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <Input
              label="Endereço"
              id="address"
              placeholder="Rua, número"
              className="input-style"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </form>
        <div className="buttons">
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
          <button className="custom-button" onClick={handleFormSubmit}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientRegistrationModal;
