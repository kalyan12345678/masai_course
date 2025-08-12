import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { VStack } from "@chakra-ui/react";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <VStack spacing={2} align="stretch">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </VStack>
  );
};

export default TodoList;
