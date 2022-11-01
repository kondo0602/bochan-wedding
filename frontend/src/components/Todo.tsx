import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Input } from "@mui/material";

type todoItem = {
  id: string;
  content: string;
  isFinished: boolean;
};

type todoProps = {
  todoItems: todoItem[];
};

export const Todo = () => {
  const todoItems: todoItem[] = [
    { id: "1", content: "go to the gym and workout", isFinished: false },
    {
      id: "2",
      content: "go to the supermarket and buy eggs",
      isFinished: false,
    },
    { id: "3", content: "brush between teeth", isFinished: true },
  ];

  return <TodoPresenter todoItems={todoItems} />;
};

const TodoPresenter = (props: todoProps) => {
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
      <CardContent sx={{ flexGrow: 1 }}>
        {props.todoItems.map((todoItem) => {
          return (
            <Grid container key={todoItem.id} spacing={2}>
              <Grid item xs={1}>
                {todoItem.isFinished ? (
                  <Button>done</Button>
                ) : (
                  <Button>todo</Button>
                )}
              </Grid>
              <Grid item xs={9}>
                <Typography gutterBottom variant="h5" component="h2">
                  {todoItem.content}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" size="small" color="error">
                  Delete
                </Button>
              </Grid>
            </Grid>
          );
        })}
      </CardContent>
      <CardActions>
        <Input fullWidth />
        <Button size="small">Add</Button>
      </CardActions>
    </Card>
  );
};

export default Todo;
