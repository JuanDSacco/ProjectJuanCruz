import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import "../pages/pages.css";
import CardInstrumentInfo from "../components/CardInstrumentInfo/CardInstrumentInfo";
const DetailPage = () => {
  const [instrument, setInstrument] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getInstrumentos = async () => {
      const q = query(
        collection(db, "instrumentos"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setInstrument(docs);
    };
    getInstrumentos();
  }, []);

  return (
    <div className="pagesStyle">
      {instrument.map((ins) => {
        return <CardInstrumentInfo instrument={ins} key={ins.id} />;
      })}
    </div>
  );
};

export default DetailPage;
