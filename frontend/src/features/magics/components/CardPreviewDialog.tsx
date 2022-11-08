import Typography from "@mui/material/Typography";
import { Card } from "../types/index";
import React from "react";
import { CardMedia, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";

type props = {
  open: boolean;
  onClose: () => void;
  card: Card | undefined;
};

function CardPreviewDialog(props: props) {
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

export default CardPreviewDialog;
