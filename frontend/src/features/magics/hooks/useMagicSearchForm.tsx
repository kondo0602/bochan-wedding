import axios from "axios";
import { useState } from "react";
import { Card, CardFilter } from "../types/index";

export const useMagicSearchForm = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [rarity, setRarity] = useState<string>("");
  const [type, setType] = useState<string>("");

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

  const handleChangeRarity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setRarity(input);
  };

  const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setType(input);
  };

  const handleSubmit = () => {
    const endpoint = "https://api.magicthegathering.io/v1/cards";

    const params: CardFilter = {
      name: searchWord,
      colors: color,
      types: type,
      rarity: rarity,
      random: true,
      pageSize: 5,
      contains: "imageUrl",
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

  return {
    cards,
    setCards,
    searchWord,
    setSearchWord,
    color,
    setColor,
    rarity,
    setRarity,
    type,
    setType,
    handleChangeSearchWord,
    handleChangeColor,
    handleChangeRarity,
    handleChangeType,
    handleSubmit,
  };
};