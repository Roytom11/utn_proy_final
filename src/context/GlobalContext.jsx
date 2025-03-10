import React, { createContext, useContext, useState} from "react";

// Crear el contexto
const GlobalContext = createContext();

// Hook personalizado para usar el contexto
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]); // 

    const agregarAlCarrito = (producto, cantidad) => {
        setCarrito((prevCarrito) => {
            console.log("Estado previo del carrito:", prevCarrito);
            console.log("Intentando agregar:", producto, "Cantidad:", cantidad);
    
            const existe = prevCarrito.find(item => item.product_id === producto.product_id);
    
            let nuevoCarrito;
            if (existe) {
                nuevoCarrito = prevCarrito.map(item =>
                    item.product_id === producto.product_id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                );
                console.log("Carrito actualizado (producto existente):", nuevoCarrito);
            } else {
                nuevoCarrito = [...prevCarrito, { ...producto, cantidad }];
                console.log("Carrito actualizado (nuevo producto):", nuevoCarrito);
            }
    
            return nuevoCarrito;
        });
    };

    



    return (
        <GlobalContext.Provider value={{ agregarAlCarrito, carrito  }}>
            {children}
        </GlobalContext.Provider>
    );
};