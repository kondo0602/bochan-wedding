import { useState } from "react";
import createRandomString from "utils/createRandomString";
import { todoItem } from "../types/todoItem";

const initialList: todoItem[] = [
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

const useTodo = () => {
  const [todoInput, setTodoInput] = useState<string>("");

  const [todoList, setTodoList] = useState<todoItem[]>(initialList);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const todoItem = {
      id: createRandomString(),
      content: todoInput,
      done: false,
    };
    setTodoList([...todoList, todoItem]);
    setTodoInput("");
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
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

  const handleDelete = (todoId: string) => {
    const newTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodoList);
  };

  return {
    todoInput,
    todoList,
    handleSubmit,
    handleChangeInput,
    handleChangeStatus,
    handleDelete,
  };
};

export default useTodo;
