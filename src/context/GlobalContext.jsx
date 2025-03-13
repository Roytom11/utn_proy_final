import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem("carrito");
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    useEffect(() => {
        console.log(" Guardando carrito en localStorage:", carrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const agregarAlCarrito = (producto, cantidad) => {
        setCarrito((prevCarrito) => {
            console.log(" Estado previo del carrito:", prevCarrito);
            console.log(" Se agrega:", producto, "Cantidad:", cantidad);

            const existe = prevCarrito.find(item => item.product_id === producto.product_id);
            let nuevoCarrito;

            if (existe) {
                nuevoCarrito = prevCarrito.map(item =>
                    item.product_id === producto.product_id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                );
            } else {
                nuevoCarrito = [...prevCarrito, { ...producto, cantidad }];
            }

            console.log(" Carrito actualizado:", nuevoCarrito);
            return nuevoCarrito;
        });
    };

    return (
        <GlobalContext.Provider value={{ carrito, agregarAlCarrito }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);