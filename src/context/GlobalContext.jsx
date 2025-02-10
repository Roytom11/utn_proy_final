import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const GlobalContext = createContext();

// Hook personalizado para usar el contexto
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto, cantidad) => {
        setCarrito([...carrito, { ...producto, cantidad }]);
    };

    return (
        <GlobalContext.Provider value={{ agregarAlCarrito, carrito }}>
            {children}
        </GlobalContext.Provider>
    );
};