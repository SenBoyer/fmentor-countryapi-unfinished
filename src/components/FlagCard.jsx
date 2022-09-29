import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FlagCard = ({ flags, name, population, region, capital }) => {
  return (
    <>
      <style>
        {`
      .css-1ri6ub7-MuiPaper-root-MuiCard-root{
        placeholder
      }
      `}
      </style>
      <Card sx={{ maxWidth: 345 }}>
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
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default FlagCard;
