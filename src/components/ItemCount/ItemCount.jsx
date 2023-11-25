import "./ItemCount.css";
import { useItemContext } from "../../context/ItemsContext";
import React from "react";

const ItemCount = ({instrument}) => {

  const {handleSumar,handleRestar,carrito,setCarrito,cantidad} = useItemContext()

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

  return (
    <div className="btnAgregarAlCarro">
      <div className="btnAgregarSacar">
        <button className="buttonMas" onClick={handleSumar}>
          +
        </button>
        <p className="cantidadNum">{cantidad}</p>
        <button className="buttonMenos" onClick={handleRestar}>
          -
        </button>
      </div>
      <button className="agregar" onClick={handleAgregar}>
        Agregar Al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
