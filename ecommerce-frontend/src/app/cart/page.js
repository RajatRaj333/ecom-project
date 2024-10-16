
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const { isAuthenticated } = useAuth(); 
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); 
    }
  }, []);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      router.push("/login"); 
    } else {
      router.push("/checkout"); 
    }
  };

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Rating: {item.rating} ⭐</p>
          </div>
        ))}
      </div>
      <button className="checkout-btn" onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}
