import React from 'react';
import { Input } from '../Index';
import "./ClientRegistrationModal.css";

const ClientRegistrationModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    onSubmit();         // Chama a função onSubmit para enviar os dados
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content-client-registration">
        <h3 style={{ textAlign: 'center' }}>Cadastrar novo cliente</h3>
        <form className="modal-form" onSubmit={handleFormSubmit}>
          <div className="modal-column">
            <Input label='Nome completo' id='name' placeholder='Maria Madalena' className="input-style" />
            <Input label='Celular' id='phone' placeholder='(19) 98787-2309' className="input-style" />
          </div>
          <div className="modal-column">
            <Input label='CPF' id='cpf' placeholder='223.221.876-14' className="input-style" />
            <Input label='Endereço' id='address' placeholder='Rua, número' className="input-style" />
          </div>
        </form>
        <div className="buttons">
          <button type="button" onClick={onClose}>Cancelar</button>
          <button className='custom-button' type="submit">Cadastrar</button>
        </div>
      </div>
    </div>
  );
};

export default ClientRegistrationModal;
