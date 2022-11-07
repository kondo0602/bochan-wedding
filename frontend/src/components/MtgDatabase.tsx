import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import StyleIcon from "@mui/icons-material/Style";
import { Card as MtgCard, CardFilter } from "../features/magics/types/index";
import { useState } from "react";
import axios from "axios";
import { CardContent, CardMedia, Input, Stack } from "@mui/material";

type Card = {};

export const MtgDatabase = () => {
  const [cards, setCards] = useState<MtgCard[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");

  const handleChangeSearchWord = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    setSearchWord(input);
  };

  const handleSubmit = () => {
    const endpoint = "https://api.magicthegathering.io/v1/cards";

    const params: CardFilter = {
      name: searchWord,
      // rarity: "rare",
      pageSize: 5,
    };

    axios
      .get(endpoint, { params: params })
      .then((res) => {
        console.log(res.data);
        setCards(res.data.cards);
        console.log(cards);
      })
      .catch((error) => console.log(error));
  };

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
        <StyleIcon sx={{ pt: 1, mr: 1 }} />
        Magic database
      </Typography>
      <CardContent sx={{ flexGrow: 1 }}>
        <Input
          fullWidth
          value={searchWord}
          placeholder="Please Enter TODO!"
          onChange={handleChangeSearchWord}
        />
        {cards.length === 0 ? (
          <Typography gutterBottom variant="h5" component="h2">
            no result.
          </Typography>
        ) : (
          <Stack direction="row" spacing={2}>
            {cards.map((card) => {
              return (
                <CardMedia
                  key={card.id}
                  component="img"
                  sx={{
                    width: 90,
                  }}
                  image={card.imageUrl}
                  alt="magic"
                />
              );
            })}
          </Stack>
        )}
      </CardContent>
      <CardActions sx={{ pl: 2, pb: 2 }}>
        <Button variant="contained" onClick={handleSubmit}>
          Fetch
        </Button>
      </CardActions>
    </Card>
  );
};

export default MtgDatabase;
