import { Card, Typography, CardActions, Button } from "@mui/material";
import { useReducer } from "react";

export const IsFinishedWithUseReducer = () => {
  const initialState = { isFinished: false };

  type ACTIONTYPE = { type: "finish" };

  const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
    switch (action.type) {
      case "finish":
        return { isFinished: true };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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
        {state.isFinished ? "done!" : "not yet"}
      </Typography>
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
          onClick={() => dispatch({ type: "finish" })}
        >
          finish
        </Button>
      </CardActions>
    </Card>
  );
};
