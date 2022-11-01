import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AvTimerIcon from "@mui/icons-material/AvTimer";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const increment = () => {
    if (999 < count + 1) {
      setError(true);
      return;
    }

    setCount((prevCount) => prevCount + 1);
    setError(false);
  };
  const decrement = () => {
    if (count - 1 < -99) {
      setError(true);
      return;
    }
    setCount((prevCount) => prevCount - 1);
    setError(false);
  };
  const double = () => {
    if (count * 2 < -99 || 999 < count * 2) {
      setError(true);
      return;
    }
    setCount((prevCount) => prevCount * 2);
    setError(false);
  };

  return (
    <Grid item key={1} xs={12} sm={6} md={4}>
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
          <AvTimerIcon sx={{ pt: 1, mr: 1 }} />
          Counter
        </Typography>
        <Typography
          gutterBottom
          variant="h1"
          component="h2"
          mx="auto"
          sx={{ pt: 2 }}
        >
          {count}
        </Typography>
        <CardContent sx={{ flexGrow: 1 }}>
          {error && (
            <Typography color="error">
              Do not operate the number to become 4 digits as it will protrude
              from the frame.
            </Typography>
          )}
        </CardContent>
        <CardActions
          sx={{
            pb: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" color="error" onClick={decrement}>
            -1
          </Button>
          <Button variant="contained" color="primary" onClick={increment}>
            +1
          </Button>
          <Button variant="contained" color="success" onClick={double}>
            x2
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Counter;
