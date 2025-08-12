import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/actions";
import { HStack, Checkbox, Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  return (
    <HStack justify="space-between" p={2} borderWidth={1} borderRadius="md">
      <Checkbox
        isChecked={completed}
        onChange={() => dispatch(toggleTodo(id))}
        colorScheme="teal"
      >
        <Text as={completed ? "del" : undefined}>{text}</Text>
      </Checkbox>
      <IconButton
        aria-label="Delete todo"
        icon={<DeleteIcon />}
        colorScheme="red"
        onClick={() => dispatch(deleteTodo(id))}
      />
    </HStack>
  );
};

export default TodoItem;
