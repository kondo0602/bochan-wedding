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
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useMagicSearchForm } from "../hooks/useMagicSearchForm";
import { Card } from "../types/index";
import CardPreviewDialog from "./CardPreviewDialog";

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

        <FormLabel id="rarity">Rarity</FormLabel>
        <RadioGroup
          row
          aria-labelledby="rarity"
          defaultValue=""
          name="radio-buttons-group"
          onChange={handleChangeRarity}
        >
          <FormControlLabel value="" control={<Radio />} label="Unspecified" />
          <FormControlLabel value="Common" control={<Radio />} label="Common" />
          <FormControlLabel
            value="Uncommon"
            control={<Radio />}
            label="Uncommon"
          />
          <FormControlLabel value="Rare" control={<Radio />} label="Rare" />
          <FormControlLabel
            value="Mythic Rare"
            control={<Radio />}
            label="Mythic Rare"
          />
        </RadioGroup>
        <FormLabel id="type">Type</FormLabel>
        <RadioGroup
          row
          aria-labelledby="type"
          defaultValue=""
          name="type"
          onChange={handleChangeType}
        >
          <FormControlLabel value="" control={<Radio />} label="Unspecified" />
          <FormControlLabel
            value="Creature"
            control={<Radio />}
            label="Creature"
          />
          <FormControlLabel
            value="Instant"
            control={<Radio />}
            label="Instant"
          />
          <FormControlLabel
            value="Sorcery"
            control={<Radio />}
            label="Sorcery"
          />
          <FormControlLabel
            value="Artifact"
            control={<Radio />}
            label="Artifact"
          />
          <FormControlLabel
            value="Enchantment"
            control={<Radio />}
            label="Enchantment"
          />
          <FormControlLabel
            value="Planeswalker"
            control={<Radio />}
            label="Planeswalker"
          />
          <FormControlLabel value="Land" control={<Radio />} label="Land" />
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
      <CardPreviewDialog
        open={isOpen}
        onClose={handleClose}
        card={previewCard}
      />
    </>
  );
};
