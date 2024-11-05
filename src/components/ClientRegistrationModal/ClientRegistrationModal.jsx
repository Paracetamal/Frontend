import React from 'react';
import "./ClientRegistrationModal.css";

const ClientRegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content-client">
        <h3 style={{ textAlign: 'center' }}>Cadastrar novo cliente</h3>
        <div className="modal-form">
          <div className="modal-column">
            <input type="text" placeholder="Nome completo" />
            <input type="text" placeholder="Celular" />
          </div>
          <div className="modal-column">
            <input type="text" placeholder="CPF" />
            <input type="text" placeholder="Endereço" />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Fechar</button>
          <button type="submit">Cadastrar</button>
        </div>
      </div>
    </div>
  );
};

export default ClientRegistrationModal;
