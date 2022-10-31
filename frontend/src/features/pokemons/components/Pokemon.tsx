import { useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CatchingPokemonSharpIcon from "@mui/icons-material/CatchingPokemonSharp";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useGetPokemons } from "../api/getPokemons";

export function Pokemon() {
  const { index, name, image, getPokemons } = useGetPokemons();

  useEffect(() => getPokemons(), [getPokemons]);

  return (
    <PokemonPresenter
      id={index}
      name={name}
      image={image}
      handleFetch={getPokemons}
    />
  );
}

type pokemonPresenterProps = {
  id: number;
  name: string;
  image: string;
  handleFetch: () => void;
};

const PokemonPresenter = (props: pokemonPresenterProps) => {
  const { id, name, image, handleFetch } = props;

  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* 初代と2代目の画像が大きいので統一的に表示できるように修正する */}
        <CardMedia
          component="img"
          sx={
            {
              // 16: 9,
              // pt: "56.25%",
            }
          }
          image={image}
          alt="pokemon"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            <CatchingPokemonSharpIcon sx={{ pt: 1, mr: 1 }} />
            Poke API
          </Typography>
          <Typography>{name}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleFetch}>
            Fetch
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
