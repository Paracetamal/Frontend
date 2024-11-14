import React, { useState } from "react";
import "./ClientTable.css";
import Modal from "../Modal/Modal";
import requestAPI from "../../requestAPI";

const ClientTable = ({ clients }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [productList, setProductList] = useState([]); // Inicializa como um array vazio
  const [loading, setLoading] = useState(false);

  const handleOpenModal = async (client) => {
    setLoading(true);
    setIsModalOpen(true);

    try {
      const response = await requestAPI(`/clients/${client.id}`, "GET");

      const products = response.order ? response.order.map((orderItem) => orderItem) : [];

      setProductList(products); // Armazenar os produtos na variável productList
      setSelectedClient(client); // Definir o cliente selecionado
    } catch (error) {
      console.error("Erro ao buscar produtos do cliente:", error);
      setProductList([]); // Garantir que, em caso de erro, o estado seja limpo
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
    setProductList([]); // Limpar os dados do produto ao fechar o modal
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
                <div className="container-client-status" data-status={client.status ? "PAGO" : "PENDENTE"}>
                  {client.status ? "PAGO" : "PENDENTE"}
                </div>
              </td>
              <td className="td-client-buy">
                <span className="material-symbols-outlined open-modal-icon" onClick={() => handleOpenModal(client)}>
                  heart_plus
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        client={selectedClient}
        onClose={handleCloseModal}
        products={productList} // Passar os produtos filtrados para o modal
        loading={loading} // Passar o estado de carregamento
      />
    </div>
  );
};

export default ClientTable;
