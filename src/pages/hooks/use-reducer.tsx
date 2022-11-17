import { Container, Grid } from "@mui/material";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Counter } from "@/features/counters";
import { Counter2 } from "@/features/counters/components/Counter2";

export default function UseReducerPage() {
  return (
    <>
      <Header />
      <main>
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Counter />
            </Grid>
            <Grid item xs={6}>
              <Counter2 />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}
