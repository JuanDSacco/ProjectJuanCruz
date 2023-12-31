import React from "react";
import "../ShopPage/ShopPage.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import "../MessageSucess/MessageSucess";
import MessageSucess from "../MessageSucess/MessageSucess";
import { ItemsContext } from "../../context/ItemsContext";
import { useContext } from "react";

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const ShopPage = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(ItemsContext);
  const handleVaciarCarrito = () => {
    vaciarCarrito();
  };
  const [values, setValues] = useState(initialState);

  const [purchaseID, serPurchaseID] = useState();

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "Pucharses"), {
      values,
    });
    setValues(initialState);
    serPurchaseID(docRef.id);
  };

  return (
    <>
      <div> 
        <h1>ShopPage</h1>

        {carrito.map((prod) => (
          <div className="divShop1" key={prod.id}>
            <h2 className="h2Shop">Instrumento: {prod.name}</h2>
            <p className="pDivShop">Precio unitario: {prod.price}</p>
            <p className="pDivShop">Precio total: {prod.price * prod.cantidad}</p>
            <p className="pDivShop">Cantidad: {prod.cantidad}</p>
          </div>
        ))}
        {carrito.length > 0 && (
          <div className="divShop1">
            <h2>Precio total: $ {precioTotal()}</h2>
            <button onClick={handleVaciarCarrito}>Vaciar Carrito</button>
          </div>
        )}
      </div>
          <div className="divSHop2">
            <h3>Al completar los datos y enviar el formulario se le entregará el número de pedido</h3>
          </div>
      <div className="Shopcar">
        <form className="ShopForm" onSubmit={handleOnSubmit}>
          <TextField
            className="textF"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleOnChange}
            required
          />
          <TextField
            className="textF"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleOnChange}
            required
          />
          <TextField
            className="textF"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={handleOnChange}
            required
          />
          <button>Enviar</button>
        </form>
        {purchaseID && <MessageSucess purchaseID={purchaseID} />}
      </div>
    </>
  );
};

export default ShopPage;
