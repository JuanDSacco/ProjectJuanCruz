import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../context/ItemsContext";


const CartWidget = () => {

const {cantidadEnCarrito} = useContext(ItemsContext)

  return (
    
    <div className="cartWidDiv">
      <Link to={"/shoppage"}>
        <ShoppingCartIcon />
        <p>{cantidadEnCarrito()}</p>
      </Link>
      </div>
      
    
  );
};

export default CartWidget;
