import StyleIcon from "@mui/icons-material/Style";
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { MagicSearchForm } from "./MagicSearchForm";

export const MtgDatabase = () => {
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
        <StyleIcon sx={{ pt: 1, mr: 1 }} />
        Magic database
      </Typography>
      <CardContent sx={{ flexGrow: 1 }}>
        <MagicSearchForm />
      </CardContent>
    </Card>
  );
};
