import AvTimerIcon from "@mui/icons-material/AvTimer";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useCounterWithUseReducer as useCounter } from "../hooks/useCounterWithUseReducer";

export const CounterWithUseReducer = () => {
  const { state, dispatch } = useCounter();

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
        <AvTimerIcon sx={{ pt: 1, mr: 1 }} />
        Counter(use-reducer)
      </Typography>
      <Typography
        gutterBottom
        variant="h1"
        component="h2"
        mx="auto"
        sx={{ pt: 2 }}
      >
        {state.count}
      </Typography>
      <CardContent sx={{ flexGrow: 1 }}>
        {state.isError && (
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
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -1
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: "increment" })}
        >
          +1
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch({ type: "double" })}
        >
          x2
        </Button>
      </CardActions>
    </Card>
  );
};
