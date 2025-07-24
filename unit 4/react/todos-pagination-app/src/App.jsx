import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Flex, Heading } from "@chakra-ui/react";
import CoffeeList from "./components/CoffeeList";
import Sidebar from "./components/Sidebar";
import { getCoffee } from "./redux/coffee/coffee.actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoffee());
  }, [dispatch]);

  return (
    <Box p={4}>
      <Heading mb={6}>Coffee List</Heading>
      <Flex>
        <Box w="20%">
          <Sidebar />
        </Box>
        <Box w="80%">
          <CoffeeList />
        </Box>
      </Flex>
    </Box>
  );
};

export default App;
