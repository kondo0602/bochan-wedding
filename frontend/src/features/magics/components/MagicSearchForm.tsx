import { CardMedia, FormControl, Input, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useMagicSearchForm } from "../hooks/useMagicSearchForm";
import { Card } from "../types/index";
import CardPreviewDialog from "./CardPreviewDialog";
import {
  MagicSearchFormRadioGroup,
  radioButtonGourpProps,
} from "./MagicSearchFormRadioGroup";

export const MagicSearchForm = () => {
  const {
    cards,
    searchWord,
    handleChangeSearchWord,
    handleChangeColor,
    handleChangeRarity,
    handleChangeType,
    handleSubmit,
  } = useMagicSearchForm();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [previewCard, setPreviewCard] = useState<Card>();

  const handlePreview = (card: Card) => {
    console.log(card);
    setIsOpen(true);
    setPreviewCard(card);
  };

  const handleClose = () => {
    console.log("Leave!");
    setIsOpen(false);
  };

  const choiceColorGroup: radioButtonGourpProps = {
    radioButtons: [
      { label: "Unspecified", value: "" },
      { label: "White", value: "W" },
      { label: "Blue", value: "U" },
      { label: "Black", value: "B" },
      { label: "Red", value: "R" },
      { label: "Green", value: "G" },
    ],
    name: "Color",
    handleChange: handleChangeColor,
  };

  const choiceTypeGroup: radioButtonGourpProps = {
    radioButtons: [
      { label: "Unspecified", value: "" },
      { label: "Creature", value: "Creature" },
      { label: "Instant", value: "Instant" },
      { label: "Sorcery", value: "Sorcery" },
      { label: "Enchantment", value: "Enchantment" },
      { label: "Artifact", value: "Artifact" },
      { label: "Planeswalker", value: "Planeswalker" },
      { label: "Land", value: "Land" },
    ],
    name: "Type",
    handleChange: handleChangeType,
  };

  const choiceRarityGroup: radioButtonGourpProps = {
    radioButtons: [
      { label: "Unspecified", value: "" },
      { label: "Common", value: "Common" },
      { label: "Uncommon", value: "Uncommon" },
      { label: "Rare", value: "Rare" },
      { label: "Mythic Rare", value: "Mythic Rare" },
    ],
    name: "Rarity",
    handleChange: handleChangeRarity,
  };

  return (
    <>
      <Stack spacing={2}>
        <FormControl>
          <Input
            fullWidth
            value={searchWord}
            placeholder="Please Enter Card Name"
            onChange={handleChangeSearchWord}
          />
        </FormControl>
        <MagicSearchFormRadioGroup {...choiceColorGroup} />
        <MagicSearchFormRadioGroup {...choiceTypeGroup} />
        <MagicSearchFormRadioGroup {...choiceRarityGroup} />
        <Stack justifyContent="flex-end">
          <Button variant="contained" onClick={handleSubmit}>
            Fetch
          </Button>
        </Stack>
        {cards.length === 0 ? (
          <Typography gutterBottom variant="h5" component="h2">
            no result.
          </Typography>
        ) : (
          <Stack direction="row" spacing={2}>
            {cards.map((card) => {
              return (
                <div key={card.id} onClick={() => handlePreview(card)}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 150,
                    }}
                    image={card.imageUrl}
                    alt="magic"
                  />
                </div>
              );
            })}
          </Stack>
        )}
      </Stack>
      <CardPreviewDialog
        open={isOpen}
        onClose={handleClose}
        card={previewCard}
      />
    </>
  );
};
