import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Searchbar } from '../../components/Index';
import './Product.css';
import Image1 from "../../components/Image/remedio.png";
import productList from '../../components/Searchbar/dataProduct';

// Mock de dados de produtos
const initialProducts = [
  { id: 1, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 10.0, image: Image1 },
  { id: 2, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 15.0, image: Image1 },
  { id: 3, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 20.0, image: Image1 },
  { id: 4, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 10.0, image: Image1 },
  { id: 5, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 15.0, image: Image1 },
  { id: 6, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 20.0, image: Image1 },
];


function Product({ onAddProduct, onComplete }) {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const [searchValue, setSearchValue] = useState("");

  const searchLowerCase = searchValue.toLowerCase();
  const filteredProduct = productList.filter((client) =>
    client.name.toLowerCase().includes(searchLowerCase)
  );

  useEffect(() => {
    setTotalEvents(filteredProduct.length);
  }, [filteredProduct]);


  // Função para adicionar produtos selecionados
  const handleAddProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  // Filtra os produtos com base no termo de busca
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-main">
      {/* Header */}

      <header className="header">
        <div className="logo-login">
          <h1>PARACETAMAL</h1>
        </div>

        <div className="filter-searchbar">
          <Searchbar setSearch={setSearchValue} />
        </div>

        <div className="buttons-product">
          <button onClick={() => onComplete(selectedProducts)} className="complete-btn">
            Concluir
          </button>

          <button className='custom-button' onClick={onAddProduct}>Cadastrar novo produto</button>
        </div>
      </header>

      <div className="main-product-list">
        {/* Lista de Cards de Produtos */}
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={handleAddProduct} />
          ))}
        </div>
      </div>


    </div>
  );
}

export default Product;
