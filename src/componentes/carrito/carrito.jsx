import "../carrito/carrito.css";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import Productos from "../productos/productos";

const Carrito = () => {
  const { carrito } = useGlobalContext();
  const [render, setRender] = useState(false); 

  useEffect(() => {
    console.log(" Carrito actualizado en Carrito.js:", carrito);
    setRender(prev => !prev); 
  }, [carrito]);

  console.log(" Estado inicial de carrito en Carrito.js:", carrito);

  return (
    <div className="carrito">
      <h2>🛒 Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        carrito.map((producto, index) => (
          <div key={index} className="carrito-item">
            <Productos
              imagen={producto.imagen}
              altImagen={producto.altImagen}
              titulo={producto.titulo}
              texto={producto.texto}
              product={producto}
            />
            <div className="carrito-detalles">
              <h5>{producto.titulo}</h5>
              <p>{producto.texto}</p>
              <p>
                <strong>Cantidad:</strong> {producto.cantidad}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Carrito;
//   return (
//     <div className="carrito">
//        {carrito.map((producto, index) => {
          
//            return<Productos
//            key= {index}
//            imagen= {producto.imagen}
//            altImagen = {producto.altImagen}
//            titulo= {producto.titulo}    
//            texto= {producto.texto}
//            product={producto}
//           />
//     ;
//   })}
//     </div>
//   )
// }


