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
  return todoItem.done ? (
    <Grid container direction="row" spacing={2}>
      <Grid item>
        <Button onClick={() => handleChangeStatus(todoItem.id)}>done</Button>
      </Grid>
      <Grid item xs={9}>
        <Typography color="text.secondary" gutterBottom variant="h5">
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
  ) : (
    <Grid container direction="row" spacing={2}>
      <Grid item>
        <Button onClick={() => handleChangeStatus(todoItem.id)}>todo</Button>
      </Grid>
      <Grid item xs={9}>
        <Typography color="text.primary" gutterBottom variant="h5">
          {todoItem.content}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TodoItem;
