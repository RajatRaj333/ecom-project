

"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; 

export default function ProductDetails({ params }) {
  const [product, setProduct] = useState(null); 
  const [cart, setCart] = useState([]); 
  const [addedToCart, setAddedToCart] = useState(false); 
  const { id } = params; 

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("/products.json");
      const products = await response.json();
      const productData = products.find((p) => p.id === parseInt(id));
      setProduct(productData);
    };
    fetchProduct();

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [id]);

  const addToCart = () => {
    const updatedCart = [...cart, product]; 
    setCart(updatedCart); 
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    setAddedToCart(true); 
    alert("Product added to cart!"); 
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

      <button onClick={addToCart} className="add-to-cart-btn">
        Add to Cart
      </button>

      {addedToCart && (
        <Link href="/cart">
          <button className="go-to-cart-btn">Go to Cart</button>
        </Link>
      )}
    </div>
  );
}

