

"use client"; 

import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard"; 

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/products.json'); 
      const data = await response.json();
      setProducts(data); 
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
