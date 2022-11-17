import AvTimerIcon from "@mui/icons-material/AvTimer";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

type props = {
  title: string;
  count: number;
  isError: boolean;
  increment: () => void;
  decrement: () => void;
  double: () => void;
};

export const Counter = (props: props) => {
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
        {props.title}
      </Typography>
      <Typography
        gutterBottom
        variant="h1"
        component="h2"
        mx="auto"
        sx={{ pt: 2 }}
      >
        {props.count}
      </Typography>
      <CardContent sx={{ flexGrow: 1 }}>
        {props.isError && (
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
        <Button variant="contained" color="error" onClick={props.decrement}>
          -1
        </Button>
        <Button variant="contained" color="primary" onClick={props.increment}>
          +1
        </Button>
        <Button variant="contained" color="success" onClick={props.double}>
          x2
        </Button>
      </CardActions>
    </Card>
  );
};
