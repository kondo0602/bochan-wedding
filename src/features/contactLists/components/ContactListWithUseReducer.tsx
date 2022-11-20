import {
  Card,
  Typography,
  CardContent,
  List,
  ListItem,
  Button,
  Input,
  Stack,
} from "@mui/material";
import React from "react";
import { useContactListWithUseReducer } from "../hooks/useContactListWithUseReducer";
import { ContactListItem } from "./ContactListItem";

export const ContactListWithUseReducer = () => {
  const { contactList, canAddContactList, dispatch } =
    useContactListWithUseReducer();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography gutterBottom variant="h5" sx={{ pt: 2, pl: 2 }}>
        Contact List (use-reducer)
      </Typography>
      <CardContent sx={{ flexGrow: 1 }}>
        <List>
          {contactList.contactList.map((item, mIndex) => (
            <ListItem key={mIndex}>
              <ContactListItem
                {...item}
                index={mIndex}
                handleChangeEmail={(
                  event: React.ChangeEvent<HTMLInputElement>,
                  mIndex: number
                ) =>
                  dispatch({
                    type: "changeEmail",
                    payload: {
                      event: event,
                      index: mIndex,
                    },
                  })
                }
                handleEditMode={() =>
                  dispatch({ type: "editMode", payload: { index: mIndex } })
                }
                handleViewMode={() =>
                  dispatch({ type: "viewMode", payload: { index: mIndex } })
                }
                handleDelete={() =>
                  dispatch({
                    type: "delete",
                    payload: { index: mIndex },
                  })
                }
              />
            </ListItem>
          ))}
        </List>
        {canAddContactList && (
          <Stack direction="row" spacing={4}>
            <Input
              fullWidth
              value={contactList.newContact.email}
              placeholder="Please Enter Email Address"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "changeInput", payload: { event: event } })
              }
            />
            <Button
              variant="contained"
              onClick={() => {
                dispatch({ type: "add" });
              }}
            >
              Add
            </Button>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};
