import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid #ccc',
        padding: 10,
        cursor: 'pointer',
        borderRadius: 5
      }}
    >
      <img src={product.thumbnail} alt={product.title} width="100%" height="150px" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
