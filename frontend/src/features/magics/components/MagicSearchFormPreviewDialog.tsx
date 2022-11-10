import { CardMedia, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import React from "react";
import { Card } from "../types/index";

type props = {
  open: boolean;
  onClose: () => void;
  card: Card | undefined;
};

export function MagicSearchFormPreviewDialog(props: props) {
  const { open, onClose, card } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
      {card && (
        <Grid container spacing={2} sx={{ p: 1 }}>
          <Grid container item xs={4}>
            <CardMedia
              component="img"
              image={card.imageUrl}
              alt="card"
              sx={{
                width: 300,
              }}
            />
          </Grid>
          <Grid container item xs={8}>
            <Grid item>
              <Typography gutterBottom>
                {card.name} / {card.manaCost}
              </Typography>
              <Typography>{card.type}</Typography>
              <Typography>{card.originalText}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Dialog>
  );
}
