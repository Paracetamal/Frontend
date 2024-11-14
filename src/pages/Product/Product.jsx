import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Searchbar, ProductRegistrationModal } from '../../components/Index';
import './Product.css';
import Image1 from "../../components/Image/remedio.png";
import productList from '../../components/Searchbar/dataProduct';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate

// Mock de dados de produtos
const initialProducts = [
  { id: 1, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 10.0, image: Image1 },
  { id: 2, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 15.0, image: Image1 },
  { id: 3, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 20.0, image: Image1 },
  { id: 4, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 10.0, image: Image1 },
  { id: 5, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 15.0, image: Image1 },
  { id: 6, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 20.0, image: Image1 },
];

function Product() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla o modal de cadastro de produto
  
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const searchLowerCase = searchValue.toLowerCase();
  const filteredProduct = productList.filter((client) =>
    client.name.toLowerCase().includes(searchLowerCase)
  );

  // Função para adicionar produtos selecionados
  const handleAddProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  // Função para concluir e voltar à página principal
  const handleComplete = () => {
    navigate(-1); // Retorna para a página anterior (principal)
  };

  // Filtra os produtos com base no termo de busca
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container-main">
      <header className="header">
        <div className="logo-login">
          <h1>PARACETAMAL</h1>
        </div>

        <div className="filter-searchbar">
          <Searchbar setSearch={setSearchValue} />
        </div>

        <div className="buttons-product">
          <button onClick={handleComplete} className="complete-btn">
            Concluir
          </button>

          {/* Abre o modal de cadastro de produto */}
          <button className='custom-button' onClick={() => setIsModalOpen(true)}>Cadastrar novo produto</button>
        </div>
      </header>

      <div className="main-product-list">
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={handleAddProduct} />
          ))}
        </div>
      </div>

      {/* Modal de Cadastro de Produto */}
      {isModalOpen && (
        <ProductRegistrationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
}

export default Product;
