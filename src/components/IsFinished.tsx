import { Card, Typography, CardActions, Button } from "@mui/material";
import { useState } from "react";

export const IsFinished = () => {
  const [isFinished, setIsFinished] = useState(false);

  const handleFinish = () => {
    setIsFinished(true);
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
        Finish(use-State)
      </Typography>
      <Typography
        gutterBottom
        variant="h4"
        component="h4"
        mx="auto"
        sx={{ pt: 2 }}
      >
        {isFinished ? "done!" : "not yet"}
      </Typography>
      <CardActions
        sx={{
          pb: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={handleFinish}>
          finish
        </Button>
      </CardActions>
    </Card>
  );
};
