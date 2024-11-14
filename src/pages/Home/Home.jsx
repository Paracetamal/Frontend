import React, { useState, useEffect } from "react";
import { Searchbar, ClientTable, Pagination, ClientRegistrationModal } from "../../components/Index";
import requestAPI from "../../requestAPI";
import "./Home.css";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);
  const [filteredClients, setFilteredClients] = useState([]); // Novo estado para a lista filtrada
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const searchLowerCase = searchValue.toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await requestAPI("/clients/list/1", "GET");

        const filtered = response.filter((client) => client.name.toLowerCase().includes(searchLowerCase));
        setFilteredClients(filtered);
        setTotalEvents(filtered.length);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchLowerCase]);

  useEffect(() => {
    setOffset(0);
  }, [searchValue]);

  return (
    <div className="container-main">
      {loading ? (
        <p>Carregando clientes...</p>
      ) : (
        <>
          <div className="header">
            <div className="logo-login">
              <h1>PARACETAMAL</h1>
            </div>

            <div className="filter-searchbar">
              <Searchbar setSearch={setSearchValue} />
            </div>

            <button className="custom-button" onClick={() => setIsModalOpen(true)}>
              Cadastrar novo cliente
            </button>
          </div>

          <div className="container-historic-content">
            {filteredClients.length === 0 ? (
              <div className="container-not-found">
                <p>Não existe nenhum cliente com esse nome</p>
              </div>
            ) : (
              <>
                <ClientTable clients={filteredClients.slice(offset, offset + 5)} />
                <Pagination limit={5} total={totalEvents} offset={offset} setOffset={setOffset} />
              </>
            )}
          </div>

          <ClientRegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
      )}
    </div>
  );
};

export default Home;
