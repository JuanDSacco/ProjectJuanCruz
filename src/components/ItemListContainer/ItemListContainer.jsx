import React from "react";
import "./ItemListContainer.css";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import CardInstrument from "../CardInstruments/CardInstruments";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    const getInstrumentos = async () => {
      const q = query(collection(db, "instrumentos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setInstruments(docs);
    };
    getInstrumentos();
  }, []);

  return (
    <div className="contenedorTarjetas">
      {instruments.map((instrument) => {
        return (
          
            <CardInstrument instrument={instrument} key={instrument.id}/>
          
        );
      })}
    </div>
  );
};

export default ItemListContainer;
