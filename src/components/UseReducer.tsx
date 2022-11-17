import AvTimerIcon from "@mui/icons-material/AvTimer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

export const UseReducer = () => {
  return (
    <Link href="/hooks/use-reducer">
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
          UseReducer
        </Typography>
        <CardContent sx={{ flexGrow: 1 }}></CardContent>
        <CardActions
          sx={{
            pb: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Button variant="contained" color="error" onClick={decrement}>
          -1
          </Button>
          <Button variant="contained" color="primary" onClick={increment}>
          +1
          </Button>
          <Button variant="contained" color="success" onClick={double}>
          x2
        </Button> */}
        </CardActions>
      </Card>
    </Link>
  );
};
