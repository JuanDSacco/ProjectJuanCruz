import { useState,useContext } from "react";
import React from "react";

export const ItemsContext = React.createContext([]);    

export const useItemContext = () => useContext(ItemsContext)

const CartContextProvider = ({children}) =>{

    const [cantidad, setCantidad] = useState(1);

const [carrito, setCarrito] = useState([]);

    const handleSumar = () => {
        cantidad >= 1 && setCantidad(cantidad + 1);
      };
    
      const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
      };
    
      const handleAgregar = () => {
        const itemAgregado = { ...instrument, cantidad };
        const nuevoCarrito = [...carrito];
        const estaEnCarro = nuevoCarrito.find(
          (producto) => producto.id === itemAgregado.id
        );
    
        if (estaEnCarro) {
          estaEnCarro.cantidad += cantidad;
          
        } else {
          nuevoCarrito.push(itemAgregado);
          
        }
        setCarrito(nuevoCarrito);
      };

    const cantidadEnCarrito = () => {
  
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    
    }
  
    const precioTotal = () =>{
  
      return carrito.reduce((acc, prod)=> acc + prod.price * prod.cantidad, 0 )
  
    }
  
    const vaciarCarrito = () =>{ setCarrito([])}

return ( 
  <ItemsContext.Provider value={{
      carrito, 
      setCarrito, 
      cantidadEnCarrito, 
      precioTotal, 
      vaciarCarrito, 
      handleSumar, 
      handleRestar, 
      handleAgregar, 
      cantidad
      }}>
      {children}
  </ItemsContext.Provider>
)

}

export default CartContextProvider;