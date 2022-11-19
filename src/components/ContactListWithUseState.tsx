import {
  Card,
  Typography,
  CardContent,
  Button,
  Input,
  List,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";
import createRandomString from "@/utils/createRandomString";

type ContactAddress = {
  id: string;
  email: string;
  mode: "view" | "edit";
};

export const ContactListWithUseState = () => {
  const [contactList, setContactList] = useState<ContactAddress[]>([
    {
      id: "1",
      email: "kondo8363@gmail.com",
      mode: "edit",
    },
    {
      id: "2",
      email: "kondo7778363@gmail.com",
      mode: "view",
    },
  ]);

  const [input, setInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInput(input);
  };
  const handleAdd = () => {
    setContactList([
      ...contactList,
      { id: createRandomString(), email: input, mode: "view" },
    ]);
    setInput("");
  };

  // const handleToggleMode = (id: string) => {
  //   const newContactList = contactList.map((contact) => {
  //     if (contact.id === id) {
  //       return { ...contact, mode: contact.mode === "view" ? "edit" : "view" };
  //     }
  //     return contact;
  //   });
  // TODO: ここでUNION型にstringを割り当てることができないというエラーになる
  //   setContactList(newContactList);
  // };

  const handleRemove = (id: string) => {
    setContactList(contactList.filter((contact) => contact.id !== id));
  };

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
              <ContactListItem
                {...item}
                input={input}
                handleDelete={handleRemove}
              />
            </ListItem>
          ))}
        </List>
        <Input
          value={input}
          placeholder="Please Enter Email Address"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </CardContent>
    </Card>
  );
};

type ContactListItemProps = {
  id: string;
  email: string;
  mode: "view" | "edit";
  input: string;
  handleDelete: (id: string) => void;
};

export const ContactListItem = (props: ContactListItemProps) => {
  return (
    <>
      {props.mode === "view" ? (
        <Typography variant="body2" color="text.secondary">
          {props.email}
          <Button>edit</Button>
          <Button onClick={() => props.handleDelete(props.id)}>delete</Button>
        </Typography>
      ) : (
        <>
          <Input value={props.email}></Input>
          <Button>save</Button>
        </>
      )}
    </>
  );
};
