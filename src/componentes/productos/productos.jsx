import React from 'react';
import './productos.css';
import BuyButton from '../BuyButton/BuyButton';


function Productos (props) {
  console.log(props)
  return(
    <div className='contenedorProductos'>
        <div className='contenedorTexto'>
      <img
      className='contenedorImagen'
      src={require(`../imagenes/${props.imagen}`)}
      alt={props.altImagen}
      />
      <h5 className='contenedorTitulo'>{props.titulo}</h5>
      <p className='contenedorParrafo'>{props.texto}</p>
      <BuyButton product={props.product}> </BuyButton>
    </div>
    </div>
  );
}

export default Productos;