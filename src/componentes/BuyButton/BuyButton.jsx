
import React, { useState } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'


const BuyButton = ({product}) => {
    /* STATE MANAGER */
    const  {agregarAlCarrito}  = useGlobalContext()
    const [counter, setCounter] = useState(0)
    
        const [compraConfirmada, setCompraConfirmada] = useState(false);

        const comprar = () => {
            if (counter < product.stock) {
                setCounter(prevCounter => {
                    const nuevoCounter = prevCounter + 1;
                    console.log("Nuevo contador:", nuevoCounter);
                    agregarAlCarrito(product, 1); // Se suma 1 al carrito
                    return nuevoCounter;
                });
            }
        };
    const quitar = () =>{
        if(counter !== 0){
            setCounter(prevCounter => prevCounter - 1)
            setCompraConfirmada(false)
        }

    }


      
    const handleConfirmar = () => {
        if (counter > 0) {
            
            agregarAlCarrito(product, counter +1);
            setCompraConfirmada(true);
        }
    };

  return (
    <>
        {
            counter === 0 
            ?
            <button className='botonMasInfo' onClick={comprar}>Comprar</button>
            :
            <div>
                <button className='botonQuitar' onClick={quitar}>-</button>
                <span>{counter}</span>
                <button className='botonSumar' onClick={comprar}>+</button>
                <button className='botonMasInfo' onClick={handleConfirmar}  >Confirmar</button>
                {compraConfirmada && <p>¡Compra Confirmada!</p>}  
                
            </div>
            
          
        }
        
    </>
  )
}

export default BuyButton