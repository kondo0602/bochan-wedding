import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Grid, Input } from "@mui/material";
import useTodo from "../hooks/useTodo";
import TodoItem from "./TodoItem";

export const Todo = () => {
  const {
    todoInput,
    todoList,
    tooLongInputError,
    tooManyTodoError,
    handleSubmit,
    handleChangeInput,
    handleChangeStatus,
    handleDelete,
  } = useTodo();

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
        <TaskAltIcon sx={{ pt: 1, mr: 1 }} />
        Todo List
      </Typography>
      {todoList.length === 0 ? (
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            You have nothing to do!
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ flexGrow: 1 }}>
          {todoList.map((todoItem) => {
            return (
              <TodoItem
                key={todoItem.id}
                todoItem={todoItem}
                handleChangeStatus={handleChangeStatus}
                handleDelete={handleDelete}
              />
            );
          })}
        </CardContent>
      )}
      <CardActions sx={{ pl: 2, pb: 2 }}>
        <Grid
          container
          component="form"
          direction="row"
          onSubmit={handleSubmit}
        >
          <Grid item>
            {tooLongInputError && (
              <Typography color="red" gutterBottom>
                It is long... can you make it within 30 characters?
              </Typography>
            )}
            {tooManyTodoError && (
              <Typography color="red" gutterBottom>
                You can not do that many, why do not you finish one first?
              </Typography>
            )}
          </Grid>
          <Grid item xs={11}>
            <Input
              fullWidth
              value={todoInput}
              placeholder="Please Enter TODO!"
              onChange={handleChangeInput}
            />
          </Grid>

          <Grid item>
            <Button type="submit" size="small" disabled={tooLongInputError}>
              Add
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Todo;
