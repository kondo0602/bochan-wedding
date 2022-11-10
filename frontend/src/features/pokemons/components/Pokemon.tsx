import CatchingPokemonSharpIcon from "@mui/icons-material/CatchingPokemonSharp";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useGetPokemons } from "../api/getPokemons";

export function Pokemon() {
  const { index, name, image, getPokemons } = useGetPokemons();

  useEffect(() => getPokemons(), []);

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
  const { id, image, handleFetch } = props;

  return (
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
        <CatchingPokemonSharpIcon sx={{ pt: 1, mr: 1 }} />
        Genger API
      </Typography>
      {/* 初代と2代目の画像が大きいので統一的に表示できるように修正する */}
      <CardMedia
        component="img"
        sx={{
          marginX: "auto",
          width: 200,
        }}
        image={image}
        alt="pokemon"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom>
          On the night of a full moon, if shadows move on their own and laugh,
          it must be Gengar’s doing.
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          pb: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={handleFetch}>
          Fetch
        </Button>
      </CardActions>
    </Card>
  );
};
