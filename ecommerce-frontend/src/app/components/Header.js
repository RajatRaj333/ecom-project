// src/app/components/Header.js
"use client"; 

import Link from "next/link";
import { useAuth } from "../context/AuthContext"; 

export default function Header() {
  const { isAuthenticated, logout } = useAuth();  

  return (
    <header className="header">
      <h1>E-commerce Store</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button> 
        ) : (
          <Link href="/login">Login</Link> 
        )}
      </nav>
    </header>
  );
}
