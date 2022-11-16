import { useState } from "react";
import createRandomString from "@/utils/createRandomString";
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

  const [tooLongInputError, setTooLongInputError] = useState<boolean>(false);
  const [tooManyTodoError, setTooManyTodoError] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (todoList.length === 4) {
      setTooManyTodoError(true);
      return;
    }

    const todoItem = {
      id: createRandomString(),
      content: todoInput,
      done: false,
    };
    setTodoList([...todoList, todoItem]);
    setTodoInput("");
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTooLongInputError(false);
    const input = event.target.value;

    if (input.length > 30) {
      setTooLongInputError(true);
    }

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
    setTooManyTodoError(false);
  };

  return {
    todoInput,
    todoList,
    tooLongInputError,
    tooManyTodoError,
    handleSubmit,
    handleChangeInput,
    handleChangeStatus,
    handleDelete,
  };
};

export default useTodo;
