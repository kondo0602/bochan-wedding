import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

type PokemonType = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: [
    {
      is_hidden: boolean;
      slot: number;
      ability: {
        name: string;
        url: string;
      };
    }
  ];
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  game_indices: [
    {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }
  ];
  held_items: [
    {
      item: {
        name: string;
        url: string;
      };
      version_details: [
        {
          rarity: number;
          version: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  location_area_encounters: string;
  moves: [
    {
      move: {
        name: string;
        url: string;
      };
      version_group_details: [
        {
          level_learned_at: number;
          version_group: {
            name: string;
            url: string;
          };
          move_learn_method: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other: {
      dream_world: {
        front_default: string;
        front_female: null;
      };
      home: {
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
      "official-artwork": {
        front_default: string;
      };
    };
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: string;
          back_gray: string;
          front_default: string;
          front_gray: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          front_default: string;
          front_gray: string;
        };
      };
      "generation-ii": {
        crystal: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        gold: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        silver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      "generation-iii": {
        emerald: {
          front_default: string;
          front_shiny: string;
        };
        "firered-leafgreen": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        "ruby-sapphire": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      "generation-iv": {
        "diamond-pearl": {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
        "heartgold-soulsilver": {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
        platinum: {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
      };
      "generation-v": {
        "black-white": {
          animated: {
            back_default: string;
            back_female: null;
            back_shiny: string;
            back_shiny_female: null;
            front_default: string;
            front_female: null;
            front_shiny: string;
            front_shiny_female: null;
          };
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
      };
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
        "x-y": {
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
      };
      "generation-vii": {
        icons: {
          front_default: string;
          front_female: null;
        };
        "ultra-sun-ultra-moon": {
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
        };
      };
      "generation-viii": {
        icons: {
          front_default: string;
          front_female: null;
        };
      };
    };
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  past_types: [
    {
      generation: {
        name: string;
        url: string;
      };
      types: [
        {
          slot: number;
          type: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
};

const favoritePokemonIdList = [92, 93, 94];

const options: AxiosRequestConfig = {
  method: "get",
  url: `https://pokeapi.co/api/v2/pokemon/${
    favoritePokemonIdList[
      Math.floor(Math.random() * favoritePokemonIdList.length)
    ]
  }`,
};

function Pokemon() {
  const [pokemonIndex, setPokemonIndex] = useState<number>(0);
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonImage, setPokemonImage] = useState<string>("");

  useEffect(() => {
    axios(options)
      .then((res: AxiosResponse<PokemonType>) => {
        const { data } = res;
        setPokemonIndex(data.id);
        setPokemonName(data.name);
        setPokemonImage(data.sprites.front_default);
      })
      .catch((error: AxiosError) => console.log(error));
  }, []);

  return (
    <Grid item key={pokemonIndex} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={
            {
              // 16: 9,
              // pt: "56.25%",
            }
          }
          image={pokemonImage}
          alt="pokemon"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Favorite Pokemon
          </Typography>
          <Typography>{pokemonName}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Pokemon;
