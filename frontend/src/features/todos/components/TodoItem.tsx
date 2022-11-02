import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { todoItem } from "../types/todoItem";

type TodoItemProps = {
  todoItem: todoItem;
  handleChangeStatus: (id: string) => void;
  handleDelete: (id: string) => void;
};

const TodoItem = ({
  todoItem,
  handleChangeStatus,
  handleDelete,
}: TodoItemProps) => {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item>
        {todoItem.done ? (
          <Button onClick={() => handleChangeStatus(todoItem.id)}>done</Button>
        ) : (
          <Button onClick={() => handleChangeStatus(todoItem.id)}>todo</Button>
        )}
      </Grid>
      <Grid item xs={9}>
        <Typography gutterBottom variant="h5" component="h2">
          {todoItem.content}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={() => handleDelete(todoItem.id)}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default TodoItem;
