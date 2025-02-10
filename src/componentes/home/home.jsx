import React from "react";
import Productos from "../productos/productos"
import "../productos/productos.css" 
import "../home/home.css"
import "./wallpaperAsusHome.jpg"
import servicio from "../../services/servicio.js"

const Home = () => {
  const productos = servicio.getProductos()
    return (
    <div className="home">
        {productos.map((producto, index) => {
          
          return<Productos
          key= {index}
          imagen= {producto.imagen}
          altImagen = {producto.altImagen}
          titulo= {producto.titulo}    
          texto= {producto.texto}
          product={producto}
          />
     
    ;
  })}
 </div>
    );
  }


export default Home;





