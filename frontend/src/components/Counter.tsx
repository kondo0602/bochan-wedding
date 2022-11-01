import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const double = () => setCount((prevCount) => prevCount * 2);

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
        <CardActions
          sx={{
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
