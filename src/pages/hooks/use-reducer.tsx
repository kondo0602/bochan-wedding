import { Container, Grid } from "@mui/material";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IsFinished } from "@/components/IsFinished";
import { PageTitle } from "@/components/PageTitle";
import { CounterWithUseState } from "@/features/counters";
import { CounterWithUseReducer } from "@/features/counters";

export default function UseReducerPage() {
  return (
    <>
      <Header />
      <main>
        <Container sx={{ py: 4 }} maxWidth="md">
          <PageTitle title={"use-reducer"} />
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <CounterWithUseState />
            </Grid>
            <Grid item xs={6}>
              <CounterWithUseReducer />
            </Grid>
            <Grid item xs={6}>
              <IsFinished />
            </Grid>
            <Grid item xs={6}>
              <IsFinished />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}
