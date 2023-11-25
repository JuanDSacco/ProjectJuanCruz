import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../CardInstrumentInfo/CardInstrumentInfo.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
const CardInstrumentInfo = ({ instrument }) => {
  return (
    <div className="tarjet">
      <Card sx={{ maxWidth: 340 }}>
        <CardMedia component="img" height="450" image={instrument.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nombre: {instrument.name}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography>Precio: ${instrument.price}</Typography>
        </CardContent>
        <CardContent>
          <Typography>Tipo: {instrument.type}</Typography>
        </CardContent>
        <CardContent>
          <Typography>Descripcion: {instrument.info}</Typography>
        </CardContent>
        </Card>
        <Link className="linkCard" to = {`/`} key={instrument.id}>
        <button className="buttonCard">Home</button>
        </Link>
        <ItemCount/>
    </div>
  );
};

export default CardInstrumentInfo;
