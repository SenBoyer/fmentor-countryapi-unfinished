import React from "react";

// const FlagCard = ({ flags, name, population, region, capital }) => {
//   return (
//     <div className="flag-card">
//       <img src={flags.png} alt={name.common} />
//       <h3>{name.common}</h3>
//       <p>Population: {population}</p>
//       <p>Region: {region}</p>
//       <p>Capital: {capital[0]}</p>
//     </div>
//   );
// };

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FlagCard = ({ flags, name, population, region, capital }) => {
  return (
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
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        {capital && <p>Capital: {capital[0]}</p>}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default FlagCard;
