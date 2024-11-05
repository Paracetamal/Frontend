import React, { useState, useEffect } from 'react';
import { Searchbar, ClientTable, Pagination, ClientRegistrationModal } from '../../components/Index';
import clientList from '../../components/Searchbar/data';
import "./Home.css";

const Home = () => {
    const [searchValue, setSearchValue] = useState("");
    const [offset, setOffset] = useState(0);
    const [totalEvents, setTotalEvents] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

    const searchLowerCase = searchValue.toLowerCase();
    const filteredClients = clientList.filter((client) =>
        client.name.toLowerCase().includes(searchLowerCase)
    );

    useEffect(() => {
        setTotalEvents(filteredClients.length);
    }, [filteredClients]);

    useEffect(() => {
        setOffset(0);
    }, [searchValue]);

    return (
        <div className="container-main">
            <div className="header">
                <div className="logo-login">
                    <h1>PARACETAMAL</h1>
                </div>

                <div className="filter-searchbar">
                    <Searchbar setSearch={setSearchValue} />
                </div>

                <button className='custom-button' onClick={() => setIsModalOpen(true)}>Cadastrar novo cliente</button>
            </div>

            <div className="container-historic-content">
                {filteredClients.length === 0 ? (
                    <div className="container-not-found">
                        <p>Não existe nenhum cliente com esse nome</p>
                    </div>
                ) : (
                    <>
                        <ClientTable clients={filteredClients.slice(offset, offset + 5)} />
                        <Pagination
                            limit={5}
                            total={totalEvents}
                            offset={offset}
                            setOffset={setOffset}
                        />
                    </>
                )}
            </div>

            {/* Modal */}
            <ClientRegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default Home;
