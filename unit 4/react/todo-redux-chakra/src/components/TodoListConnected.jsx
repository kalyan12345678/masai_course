// Optional: Demo of mapStateToProps with connect
import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { VStack } from "@chakra-ui/react";

const TodoListConnected = ({ todos }) => (
  <VStack spacing={2} align="stretch">
    {todos.map((todo) => (
      <TodoItem key={todo.id} {...todo} />
    ))}
  </VStack>
);

const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps)(TodoListConnected);
