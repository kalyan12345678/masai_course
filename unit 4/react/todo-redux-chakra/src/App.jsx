
import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => (
  <Box minH="100vh" bgGradient="linear(to-br, teal.50, orange.50)">
    <Box maxW="500px" mx="auto" py={10} px={4}>
      <Heading mb={8} textAlign="center" color="teal.700" fontWeight="extrabold" letterSpacing={2}>
        Todo App
      </Heading>
      <VStack spacing={6} align="stretch">
        <TodoInput />
        <TodoList />
      </VStack>
    </Box>
  </Box>
);

export default App;
