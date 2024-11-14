import React from 'react';
import './ProductCard.css';  // Estilos separados para o card

function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      {/* Contêiner para preço e botão */}
      <div className="card-footer">
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
        <button onClick={() => onAdd(product)} className="custom-button">
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
