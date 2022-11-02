import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Input } from "@mui/material";
import useTodo from "../hooks/useTodo";

export const Todo = () => {
  const {
    todoInput,
    todoList,
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
              <Grid container direction="row" key={todoItem.id} spacing={2}>
                <Grid item>
                  {todoItem.done ? (
                    <Button onClick={() => handleChangeStatus(todoItem.id)}>
                      done
                    </Button>
                  ) : (
                    <Button onClick={() => handleChangeStatus(todoItem.id)}>
                      todo
                    </Button>
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
          })}
        </CardContent>
      )}
      <CardActions>
        <form onSubmit={handleSubmit}>
          <Input value={todoInput} onChange={handleChangeInput} />
          <Button type="submit" size="small">
            Add
          </Button>
        </form>
      </CardActions>
    </Card>
  );
};

export default Todo;
