import React from "react";
import "./ProductTable.css";

const ProductTable = ({ products, onEvaluate }) => {
  return (
    <div className="container-table-product">
      <table>
        <thead>
          <tr>
            <th className="th-product-name">Nome do produto</th>
            <th className="th-product-date">Data da compra</th>
            <th className="th-product-quantity">Qtd</th>
            <th className="th-product-price">Valor</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="td-product-name">{product.product.name}</td>
              <td className="td-product-date">{product.datePurchase}</td>
              <td className="td-product-quantity">{product.amount}</td>
              <td className="td-product-price">{product.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
