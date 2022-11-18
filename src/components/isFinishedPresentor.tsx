import { Card, Typography, CardActions, Button } from "@mui/material";

type props = {
  title: string;
  isFinished: boolean;
  handleFinish: () => void;
};

export const IsFinishedPresentor = (props: props) => {
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
        {props.title}
      </Typography>
      <Typography
        gutterBottom
        variant="h4"
        component="h4"
        mx="auto"
        sx={{ pt: 2 }}
      >
        {props.isFinished ? "done!" : "not yet"}
      </Typography>
      <CardActions
        sx={{
          pb: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={props.handleFinish}>
          finish
        </Button>
      </CardActions>
    </Card>
  );
};
