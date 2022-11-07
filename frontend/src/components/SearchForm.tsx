import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card as MtgCard, CardFilter } from "../features/magics/types/index";
import { useState } from "react";
import axios from "axios";
import {
  CardMedia,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";

export const SearchForm = () => {
  const [cards, setCards] = useState<MtgCard[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const handleChangeSearchWord = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    setSearchWord(input);
  };

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setColor(input);
  };

  const handleSubmit = () => {
    const endpoint = "https://api.magicthegathering.io/v1/cards";

    const params: CardFilter = {
      name: searchWord,
      colors: color,
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
    <>
      <FormControl>
        <Input
          fullWidth
          value={searchWord}
          placeholder="Please Enter Card Name"
          onChange={handleChangeSearchWord}
        />
        <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          onChange={handleChangeColor}
        >
          <FormControlLabel value="" control={<Radio />} label="Unspecified" />
          <FormControlLabel value="W" control={<Radio />} label="White" />
          <FormControlLabel value="U" control={<Radio />} label="Blue" />
          <FormControlLabel value="B" control={<Radio />} label="Black" />
          <FormControlLabel value="R" control={<Radio />} label="Red" />
          <FormControlLabel value="G" control={<Radio />} label="Green" />
        </RadioGroup>
      </FormControl>
      <Button variant="contained" onClick={handleSubmit}>
        Fetch
      </Button>
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
    </>
  );
};