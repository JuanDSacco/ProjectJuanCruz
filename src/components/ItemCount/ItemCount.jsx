import "./ItemCount.css";
import { useItemContext } from "../../context/ItemsContext";
import React from "react";

const ItemCount = () => {

  const {handleSumar,handleRestar,handleAgregar,carrito,setCarrito,cantidad} = useItemContext()

  
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
