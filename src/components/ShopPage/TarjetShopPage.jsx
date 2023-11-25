import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../CardInstruments/CardInstruments.css";

const TarjetShopPage = ({ instrument }) => {
    return (
      <div className="tarjet">
        <Card sx={{ maxWidth: 340 }}>
          <CardMedia component="img" height="350" image={instrument.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nombre: {instrument.name}
            </Typography>
            <Typography>Precio: ${instrument.price}</Typography>
          </CardContent>
          <Typography>Tipo: {instrument.type}</Typography>
        </Card>
    
      </div>
    );
  };

export default TarjetShopPage