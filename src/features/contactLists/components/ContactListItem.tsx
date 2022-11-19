import { Typography, Button, Input, Stack } from "@mui/material";

type props = {
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

export const ContactListItem = (props: props) => {
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
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
          <Button variant="contained" onClick={() => handleEditMode(index)}>
            edit
          </Button>
          <Button variant="contained" onClick={() => handleDelete(index)}>
            delete
          </Button>
        </Stack>
      ) : (
        <Stack direction="row" spacing={4}>
          <Input
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeEmail(e, index)
            }
          ></Input>
          <Button variant="contained" onClick={() => handleViewMode(index)}>
            save
          </Button>
        </Stack>
      )}
    </>
  );
};
