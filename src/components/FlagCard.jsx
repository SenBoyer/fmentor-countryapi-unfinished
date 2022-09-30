import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FlagCard = ({ flags, name, population, region, capital, darkMode }) => {
  return (
    <>
      <style>
        {`.dark-mode-card {
          background-color: hsl(209, 23%, 22%);
          color: white;
        }`}
      </style>
      <Card
        sx={{ maxWidth: 345 }}
        className={`${darkMode ? "dark-mode-card" : ""}`}
      >
        <CardMedia
          component="img"
          alt={name.common}
          height="140"
          image={flags.png}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.common}
          </Typography>
          <p>Population: {population.toLocaleString("en-us")}</p>
          <p>Region: {region}</p>
          {capital && <p>Capital: {capital[0]}</p>}
        </CardContent>
      </Card>
    </>
  );
};

export default FlagCard;
