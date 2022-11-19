import { Typography, Button, Input } from "@mui/material";

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
