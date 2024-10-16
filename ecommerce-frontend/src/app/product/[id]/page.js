
// src/app/product/[id]/page.js
"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext"; // Using authentication context
import { useRouter } from "next/navigation";

export default function ProductDetails({ params }) {
  const { isAuthenticated } = useAuth(); // Get authentication state
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const { id } = params;

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("/products.json"); // Fetch product data from JSON
      const products = await response.json();
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
    };
    fetchProduct();
  }, [id]);

  // Handle "Buy Now" button click
  const handleBuyNow = () => {
    if (!isAuthenticated) {
      router.push("/login"); // If user is not authenticated, redirect to login page
    } else {
      router.push("/checkout"); // If user is authenticated, proceed to checkout
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating} ⭐</p>
      <h4>Available Sizes:</h4>
      <ul>
        {product.sizes.map((size, index) => (
          <li key={index}>
            Size: {size.size} - Quantity: {size.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
}
