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

type ContactAddress = {
  email: string;
  mode: "view" | "edit";
};

export const ContactListWithUseState = () => {
  const initialContactAddress: ContactAddress[] = [
    {
      email: "kondo8363@gmail.com",
      mode: "edit",
    },
    {
      email: "kondo7778363@gmail.com",
      mode: "view",
    },
  ];

  const [contactList, setContactList] = useState<ContactAddress[]>(
    initialContactAddress
  );

  const [input, setInput] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = event.target.value;
    setInput(input);
  };

  const handleAdd = () => {
    setContactList([...contactList, { email: input, mode: "view" }]);
    setInput("");
  };

  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const input = event.target.value;
    const newContactList = contactList.map((contactAddress, mIndex) => {
      return index === mIndex
        ? { ...contactAddress, email: input }
        : contactAddress;
    });
    setContactList(newContactList);
  };

  const handleEditMode = (index: number) => {
    const newContactList: ContactAddress[] = contactList.map(
      (contact, mIndex) => {
        return index === mIndex ? { ...contact, mode: "edit" } : contact;
      }
    );
    setContactList(newContactList);
  };

  const handleViewMode = (index: number) => {
    const newContactList: ContactAddress[] = contactList.map(
      (contact, mIndex) => {
        return index === mIndex ? { ...contact, mode: "view" } : contact;
      }
    );

    setContactList(newContactList);
  };

  const handleDelete = (index: number) => {
    setContactList(contactList.filter((contact, fIndex) => index !== fIndex));
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
          {contactList.map((item, mIndex) => (
            <ListItem key={mIndex}>
              <ContactListItem
                {...item}
                index={mIndex}
                handleChangeEmail={handleChangeEmail}
                handleEditMode={handleEditMode}
                handleViewMode={handleViewMode}
                handleDelete={handleDelete}
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
  index: number;
  email: string;
  mode: "view" | "edit";
  handleChangeEmail: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleEditMode: (index: number) => void;
  handleViewMode: (index: number) => void;
  handleDelete: (index: number) => void;
};

export const ContactListItem = (props: ContactListItemProps) => {
  const {
    index,
    email,
    mode,
    handleChangeEmail,
    handleEditMode,
    handleViewMode,
    handleDelete,
  } = props;

  return (
    <>
      {mode === "view" ? (
        <Typography variant="body2" color="text.secondary">
          {email}
          <Button onClick={() => handleEditMode(index)}>edit</Button>
          <Button onClick={() => handleDelete(index)}>delete</Button>
        </Typography>
      ) : (
        <>
          <Input
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeEmail(e, index)
            }
          ></Input>
          <Button onClick={() => handleViewMode(index)}>save</Button>
        </>
      )}
    </>
  );
};
