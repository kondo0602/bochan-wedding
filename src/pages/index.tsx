import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { UseReducer } from "@/components/UseReducer";
import { CounterWithUseState } from "@/features/counters";
import { MtgDatabase } from "@/features/magics";
import { Pokemon } from "@/features/pokemons";
import { Todo } from "@/features/todos";

export default function Album() {
  return (
    <div>
      <Header />
      <main>
        <PageTitle
          title="React Training Lab"
          subTitle="This is a project I started for practicing React. I am just going
              to list my favourites."
        />
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Pokemon />
            </Grid>
            <Grid item xs={6}>
              <CounterWithUseState />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Todo />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <MtgDatabase />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <UseReducer />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
