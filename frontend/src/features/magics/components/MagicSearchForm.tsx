import { CardMedia, FormControl, Input, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMagicSearchForm } from "../hooks/useMagicSearchForm";
import { MagicSearchFormPreviewDialog } from "./MagicSearchFormPreviewDialog";
import {
  MagicSearchFormRadioGroup,
  radioButtonGourpProps,
} from "./MagicSearchFormRadioGroup";

export const MagicSearchForm = () => {
  const {
    cards,
    searchWord,
    previewCard,
    isLoading,
    isOpen,
    handleChangeSearchWord,
    handleChangeColor,
    handleChangeRarity,
    handleChangeType,
    handleSubmit,
    handleOpenPreview,
    handleClosePreview,
  } = useMagicSearchForm();

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
        <Stack>
          <Button variant="contained" onClick={handleSubmit}>
            Fetch
          </Button>
        </Stack>
        {isLoading ? (
          <Typography variant="h6">Loading...</Typography>
        ) : (
          <>
            {cards.length === 0 ? (
              <Typography variant="h6" color="red">
                no result.
              </Typography>
            ) : (
              <Stack direction="row" spacing={2}>
                {cards.map((card) => {
                  return (
                    <div key={card.id} onClick={() => handleOpenPreview(card)}>
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
          </>
        )}
      </Stack>
      <MagicSearchFormPreviewDialog
        open={isOpen}
        onClose={handleClosePreview}
        card={previewCard}
      />
    </>
  );
};
