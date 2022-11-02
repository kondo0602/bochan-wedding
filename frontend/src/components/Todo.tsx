import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Input } from "@mui/material";
import { useState } from "react";

type todoItem = {
  id: string;
  content: string;
  done: boolean;
};

type todoProps = {
  todoInput: string;
  todoItems: todoItem[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeStatus: (id: string) => void;
  handleDelete: (id: string) => void;
};

const createRandomString = (): string =>
  Math.random().toString(32).substring(2);

export const Todo = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const todoItems: todoItem[] = [
    {
      id: createRandomString(),
      content: "go to the gym and workout",
      done: false,
    },
    {
      id: createRandomString(),
      content: "go to the supermarket and buy eggs",
      done: false,
    },
    {
      id: createRandomString(),
      content: "brush between teeth",
      done: true,
    },
  ];

  const [todoList, setTodoList] = useState<todoItem[]>(todoItems);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todoInput);

    const todoItem = {
      id: createRandomString(),
      content: todoInput,
      done: false,
    };
    setTodoList([...todoList, todoItem]);
    setTodoInput("");
  };

  const handleChangeStatus = (id: string) => {
    const newTodoList: todoItem[] = todoList.map((todoItem) => {
      if (todoItem.id === id) {
        todoItem.done = !todoItem.done;
      }

      return todoItem;
    });

    setTodoList(newTodoList);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  const handleDelete = (todoId: string) => {
    const newTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodoList);
  };

  return (
    <TodoPresenter
      todoInput={todoInput}
      todoItems={todoList}
      handleSubmit={handleSubmit}
      handleChangeStatus={handleChangeStatus}
      handleChangeInput={handleChangeInput}
      handleDelete={handleDelete}
    />
  );
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
      {props.todoItems.length === 0 ? (
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            You have nothing to do!
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ flexGrow: 1 }}>
          {props.todoItems.map((todoItem) => {
            return (
              <Grid container direction="row" key={todoItem.id} spacing={2}>
                <Grid item>
                  {todoItem.done ? (
                    <Button
                      onClick={() => props.handleChangeStatus(todoItem.id)}
                    >
                      done
                    </Button>
                  ) : (
                    <Button
                      onClick={() => props.handleChangeStatus(todoItem.id)}
                    >
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
                    onClick={() => props.handleDelete(todoItem.id)}
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
        <form onSubmit={props.handleSubmit}>
          <Input value={props.todoInput} onChange={props.handleChangeInput} />
          <Button type="submit" size="small">
            Add
          </Button>
        </form>
      </CardActions>
    </Card>
  );
};

export default Todo;
