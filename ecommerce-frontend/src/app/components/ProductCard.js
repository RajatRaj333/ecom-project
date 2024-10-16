
// src/app/components/ProductCard.js
"use client"; 

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="product-card" style={{ textAlign: "center", margin: "20px" }}>
      <img
        src={product.image}
        alt={product.name}
        className="product-image"  
      />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating} ⭐</p>
      <Link href={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}
