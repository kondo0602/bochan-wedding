import {
  Card,
  Typography,
  CardContent,
  Button,
  Input,
  List,
  ListItem,
} from "@mui/material";
import React from "react";
import { useContactListWithUseState } from "../hooks/useContactListWithUseState";
import { ContactListItem } from "./ContactListItem";

export const ContactListWithUseState = () => {
  const {
    contactList,
    input,
    handleChangeEmail,
    handleEditMode,
    handleViewMode,
    handleDelete,
    handleChangeInput,
    handleAdd,
  } = useContactListWithUseState();

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
          onChange={handleChangeInput}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </CardContent>
    </Card>
  );
};
