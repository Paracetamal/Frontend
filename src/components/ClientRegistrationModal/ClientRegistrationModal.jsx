import React from 'react';
import { Input, ButtonLink } from '../Index';
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
      <div className="modal-content-client-registration">
        <h3 style={{ textAlign: 'center' }}>Cadastrar novo cliente</h3>
        <div className="modal-form">
          <div className="modal-column">
            <Input label='Nome completo' id='text' placeholder='Maria Madalena' className="input-style" />
            <Input label='Celular' id='text' placeholder='(19) 98787-2309' className="input-style" />
          </div>
          <div className="modal-column">
            <Input label='CPF' id='text' placeholder='223.221.876-14' className="input-style" />
            <Input label='Endereço' id='text' placeholder='Rua, número' className="input-style" />
          </div>
        </div>
        <div className="buttons">
          <button>Cancelar</button>
          <ButtonLink to="/pay">Cadastrar</ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default ClientRegistrationModal;
