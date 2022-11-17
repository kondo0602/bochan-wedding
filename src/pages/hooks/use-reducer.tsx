import { Container, Grid, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Counter } from "@/features/counters";
import { CounterWithUseReducer } from "@/features/counters/components/CounterWithUseReducer";

export default function UseReducerPage() {
  return (
    <>
      <Header />
      <main>
        <Container sx={{ py: 4 }} maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            use-Reducer
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Counter />
            </Grid>
            <Grid item xs={6}>
              <CounterWithUseReducer />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}
