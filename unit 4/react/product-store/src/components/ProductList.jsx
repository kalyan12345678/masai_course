import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err));
  }, []);

  const categories = [...new Set(products.map(p => p.category))];

  let filtered = [...products];

  if (categoryFilter) {
    filtered = filtered.filter(p => p.category === categoryFilter);
  }

  if (sortOrder === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Product Store</h2>

      {/* Filter & Sort Controls */}
      <div style={{ marginBottom: 20 }}>
        <select onChange={e => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>

        <select onChange={e => setSortOrder(e.target.value)} style={{ marginLeft: 10 }}>
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
