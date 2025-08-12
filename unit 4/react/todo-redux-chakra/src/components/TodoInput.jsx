import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";
import { v4 as uuidv4 } from "uuid";
import { Input, Button, HStack } from "@chakra-ui/react";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTodo({ id: uuidv4(), text, completed: false }));
    setText("");
  };

  return (
    <HStack mb={4}>
      <Input
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button colorScheme="teal" onClick={handleAdd}>
        Add
      </Button>
    </HStack>
  );
};

export default TodoInput;
