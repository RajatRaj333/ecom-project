// src/app/context/AuthContext.js
"use client"; // Marks this file as a client component

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

// Create the authentication context
const AuthContext = createContext();

// Define AuthProvider to wrap the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Store authentication status
  const router = useRouter();

  const login = () => {
    setIsAuthenticated(true);
    router.push("/checkout"); // Redirect to checkout after login
  };

  const logout = () => {
    setIsAuthenticated(false);
    router.push("/login"); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
