import {
  Card,
  Typography,
  CardContent,
  Button,
  Input,
  List,
  ListItem,
} from "@mui/material";
import { useState } from "react";

type ContactAddress = {
  email: string;
  mode: "view" | "edit";
};

export const ContactListWithUseState = () => {
  const [contactList, setContactList] = useState<ContactAddress[]>([
    {
      email: "kondo8363@gmail.com",
      mode: "edit",
    },
    {
      email: "kondo7778363@gmail.com",
      mode: "view",
    },
  ]);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography gutterBottom variant="h5" sx={{ pt: 2, pl: 2 }}>
        Contact List (use-state)
      </Typography>
      <CardContent sx={{ flexGrow: 1 }}>
        <List>
          {contactList.map((item) => (
            <ListItem key={item.email}>
              <ContactListItem {...item} />
            </ListItem>
          ))}
        </List>
        <Button variant="contained">Add</Button>
      </CardContent>
    </Card>
  );
};

export const ContactListItem = (props: ContactAddress) => {
  return (
    <>
      {props.mode === "view" ? (
        <Typography variant="body2" color="text.secondary">
          {props.email}
          <Button>edit</Button>
          <Button>delete</Button>
        </Typography>
      ) : (
        <>
          <Input placeholder="Please Enter Email Adress"></Input>
          <Button>save</Button>
        </>
      )}
    </>
  );
};
