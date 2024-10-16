

// src/app/login/page.js
"use client";

import { useAuth } from "../context/AuthContext"; // Use AuthContext for authentication

export default function Login() {
  const { login } = useAuth(); // Access the login function

  const handleLogin = () => {
    login(); // Call login function to set user as authenticated
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <p>You need to log in to proceed with the purchase.</p>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
