import React, { useState, useEffect } from 'react';
import "./ClientTable.css";
import { ProductTable, ButtonLink } from '../Index';
import productList from '../Searchbar/dataProduct';

const ClientTable = ({ clients, onEvaluate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const searchLowerCase = searchValue.toLowerCase();
  const filteredProducts = productList.filter((client) =>
    client.name.toLowerCase().includes(searchLowerCase)
  );

  // Função para abrir o modal e definir o cliente selecionado
  const handleOpenModal = (client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  // Detectar clique fora do modal para fechar
  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      handleCloseModal();
    }
  };

  return (
    <div className="container-table">
      <table>
        <thead>
          <tr>
            <th className="th-client-name">Nome do cliente</th>
            <th className="th-client-cpf">CPF</th>
            <th className="th-client-status">Status da conta</th>
            <th className="th-client-buy"></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td className="td-client-name">{client.name}</td>
              <td className="td-client-cpf">{client.cpf}</td>
              <td className="td-client-status">
                <div
                  className="container-client-status"
                  data-status={client.status === "true" ? "PAGO" : "PENDENTE"}
                >
                  {client.status === "true" ? "PAGO" : "PENDENTE"}
                </div>
              </td>
              <td className="td-client-buy">
                <span
                  className="material-symbols-outlined open-modal-icon"
                  onClick={() => handleOpenModal(client)}
                >
                  heart_plus
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content-client">
            {selectedClient ? (
              <div className="modal-header">
                <h3>{selectedClient.name}</h3>
                <div className="modal-info">
                  <p><strong>CPF:</strong> {selectedClient.cpf}</p>
                  <p><strong>Endereço:</strong> {selectedClient.address}</p>
                  <p><strong>Telefone:</strong> {selectedClient.phone}</p>
                </div>
              </div>
            ) : (
              <p>Nenhum cliente selecionado.</p>
            )}
            {/* Lista de produtos com scroll */}
            <div className="product-list-scroll">
              <ProductTable products={filteredProducts} />
            </div>
            <div className="modal-value">
              <h3>Valor total: <span>R$ 100,00</span></h3>
              <div className="buttons">
                <button>Adicionar novos produtos</button>
                <ButtonLink to="/pay">Pagar Conta</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientTable;
