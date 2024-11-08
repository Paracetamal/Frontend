import React, { useState } from 'react';
import "./Modal.css";
import { ProductTable, ButtonLink, ProductRegistrationModal } from '../Index';

const Modal = ({ isOpen, client, onClose, products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal interno

  if (!isOpen && !isModalOpen) return null; // Não exibe o modal se ambos estiverem fechados

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };

  const openProductModal = () => {
    setIsModalOpen(true);
    onClose(); // Fecha o modal principal ao abrir o modal de cadastro de produto
  };

  return (
    <>
      {/* Modal Principal */}
      {isOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content-client">
            {client ? (
              <div className="modal-header">
                <h3>{client.name}</h3>
                <div className="modal-info">
                  <p><strong>CPF:</strong> {client.cpf}</p>
                  <p><strong>Endereço:</strong> {client.address}</p>
                  <p><strong>Telefone:</strong> {client.phone}</p>
                </div>
              </div>
            ) : (
              <p>Nenhum cliente selecionado.</p>
            )}
            <div className="product-list-scroll">
              <ProductTable products={products} />
            </div>
            <div className="modal-value">
              <h3>Valor total: <span>R$ 100,00</span></h3>
              <div className="buttons">
                <button onClick={openProductModal}>Adicionar novos produtos</button>
                <ButtonLink to="/pay">Pagar Conta</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Cadastro de Produto */}
      <ProductRegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Modal;
