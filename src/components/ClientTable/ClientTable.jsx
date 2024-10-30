// ClientTable.jsx

import React, { useState } from 'react';
import "./ClientTable.css";
import { ProductTable, ButtonLink } from '../Index';
import productList from '../Searchbar/dataProduct';
import Modal from '../Modal/Modal'; 

const ClientTable = ({ clients }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleOpenModal = (client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  const searchLowerCase = searchValue.toLowerCase();
  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchLowerCase)
  );

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

      <Modal
        isOpen={isModalOpen}
        client={selectedClient}
        onClose={handleCloseModal}
        products={filteredProducts}
      />
    </div>
  );
};

export default ClientTable;
