import "../carrito/carrito.css"
import React from 'react'
import { useGlobalContext } from '../../context/GlobalContext'


const Carrito = () => {
    const value = useGlobalContext()
    console.log(value)
  return (
    <div className="carrito">
      
    </div>
  )
}

export default Carrito
