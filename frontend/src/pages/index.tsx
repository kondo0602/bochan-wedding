import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Counter } from "@/features/counters";
import { MtgDatabase } from "@/features/magics";
import { Pokemon } from "@/features/pokemons";
import { Todo } from "@/features/todos";
import Footer from "components/Footer";
import Header from "components/Header";

export default function Album() {
  return (
    <div>
      <Header />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            py: 4,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              React Training Lab
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              This is a project I started for practicing React. I am just going
              to list my favourites.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Pokemon />
            </Grid>
            <Grid item xs={6}>
              <Counter />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Todo />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <MtgDatabase />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
