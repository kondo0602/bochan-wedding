import { Box, Container, Typography } from "@mui/material";

type props = {
  title: string;
  subTitle?: string;
};

export const PageTitle = (props: props) => {
  return (
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
          {props.title}
        </Typography>
        {props.subTitle && (
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            {props.subTitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
};
