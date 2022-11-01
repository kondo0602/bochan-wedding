import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";
import { pokeApiResponse, sprites } from "../types";

const pickImageFromAnyGeneration = (sprites: sprites) => {
  const images = [
    sprites.versions["generation-i"]["red-blue"].front_default,
    sprites.versions["generation-i"].yellow.front_default,
    sprites.versions["generation-ii"].gold.front_default,
    sprites.versions["generation-ii"].silver.front_default,
    sprites.versions["generation-iii"]["firered-leafgreen"].front_default,
    sprites.versions["generation-iv"]["diamond-pearl"].front_default,
    sprites.versions["generation-iv"]["heartgold-soulsilver"].front_default,
    sprites.versions["generation-v"]["black-white"].front_default,
  ];

  return images[Math.floor(Math.random() * images.length)];
};

const options: AxiosRequestConfig = {
  method: "get",
  url: "https://pokeapi.co/api/v2/pokemon/94",
};

export const useGetPokemons = () => {
  const [index, setIndex] = useState<number>(0);

  const [name, setName] = useState<string>("");

  const [image, setImage] = useState<string>("");

  const getPokemons = () => {
    axios(options)
      .then((res: AxiosResponse<pokeApiResponse>) => {
        const { data } = res;
        setIndex(data.id);
        setName(data.name);
        setImage(pickImageFromAnyGeneration(data.sprites));
      })
      .catch((error: AxiosError) => console.log(error));
  };

  return { index, name, image, getPokemons };
};
