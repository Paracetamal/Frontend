import React, { useState } from "react";
import { Input } from "../Index";
import requestAPI from "../../requestAPI";
import { toast, ToastContainer } from "react-toastify";
import "./ProductRegistrationModal.css";

const ProductRegistrationModal = ({ isOpen, onClose, onSubmit }) => {
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState("");
  const [productImage, setProductImage] = useState(null);

  // Função para atualizar a imagem do produto ao ser carregada
  const handleProductImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  if (!isOpen) return null;

  // Fecha o modal ao clicar fora do conteúdo
  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      onClose();
    }
  };

  // Simula o envio dos dados
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!productImage || !productName || !productValue) {
      return toast.error("Preencha todos os campos");
    }

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", productValue);
    formData.append("img", productImage);
    try {
      const response = await requestAPI("/products/create", "POST", formData);

      if (response.error) {
        return toast.error(response.error);
      }

      setProductName("");
      setProductValue("");
      setProductImage(null);
      return toast.success(response.status);
    } catch (error) {
      return toast.error("Erro no cadastro");
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <ToastContainer />
      <div className="modal-content-client-registration">
        <h3 style={{ textAlign: "center" }}>Cadastrar novo produto</h3>
        <form className="modal-form-product" onSubmit={handleFormSubmit}>
          <div className="modal-column">
            <Input
              label="Nome do produto"
              id="name"
              placeholder="Paracetamol"
              className="input-style"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <Input
              label="Valor"
              id="value"
              placeholder="R$ 20,00"
              className="input-style"
              value={productValue}
              onChange={(e) => setProductValue(e.target.value)}
            />
            <Input
              label="Imagem do Produto"
              type="file"
              id="productImage"
              accept="image/*"
              onChange={handleProductImageChange}
            />

            <button className="custom-button" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductRegistrationModal;
