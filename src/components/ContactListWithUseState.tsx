import { Card, Typography, CardContent, Button, Input } from "@mui/material";

export const ContactListWithUseState = () => {
  type NotificationDestination = {
    email: string;
    mode: "view" | "edit";
  };

  const notificationDestination: NotificationDestination[] = [
    {
      email: "kondo8363@gmail.com",
      mode: "edit",
    },
    {
      email: "kondo7778363@gmail.com",
      mode: "view",
    },
  ];

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
        Contact List (use-state)
      </Typography>
      <CardContent sx={{ flexGrow: 1 }}>
        {notificationDestination.map((item) => (
          <Typography key={item.email} variant="body2" color="text.secondary">
            {item.email}
            <Button>edit</Button>
            <Button>delete</Button>
          </Typography>
        ))}
        <Input placeholder="Please Enter Email Adress"></Input>
        <Button>save</Button>
      </CardContent>
    </Card>
  );
};
