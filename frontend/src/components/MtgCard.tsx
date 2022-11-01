import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as Scry from "scryfall-sdk";
import { Card as MTGCard } from "scryfall-sdk";
import StyleIcon from "@mui/icons-material/Style";

const MtgCard = () => {
  const [card, setCard] = useState<MTGCard>();
  useEffect(() => {
    Scry.Cards.byName("Chalice of the Void")
      .then((card: MTGCard) => {
        setCard(card);
        console.log(card);
      })
      .catch((error) => console.log(error));
  });

  return (
    <Grid item key={1} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          sx={{ pt: 2, pl: 2 }}
        >
          <StyleIcon sx={{ pt: 1, mr: 1 }} />
          MTG API
        </Typography>
        <CardMedia
          component="img"
          sx={{
            marginX: "auto",
            width: 200,
            // 16: 9,
            // pt: "56.25%",
          }}
          image={card?.image_uris?.small}
          alt="pokemon"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom>{card?.name}</Typography>
        </CardContent>
        <CardActions
          sx={{
            pb: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained">Fetch</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MtgCard;
