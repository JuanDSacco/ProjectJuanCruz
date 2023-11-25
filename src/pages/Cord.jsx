import React from "react";
import CardInstrument from "../components/CardInstruments/CardInstruments";
import { collection, query, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";

const Cord = () => {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    const getInstrumentos = async () => {
      const q = query(
        collection(db, "instrumentos"),
        where("type", "==", "cord")
      );
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
    <div className="pagesStyle">
      {instruments.map((instrument) => {
        return <CardInstrument key={instrument.id} instrument={instrument} />;
      })}
    </div>
  );
};

export default Cord;
