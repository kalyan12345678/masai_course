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
    <Box minH="100vh" bgGradient="linear(to-br, teal.50, orange.50)">
      <Box maxW="1200px" mx="auto" py={8} px={4}>
        <Heading mb={8} textAlign="center" color="teal.700" fontWeight="extrabold" letterSpacing={2}>
          Coffee List
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} gap={8}>
          <Box w={{ base: "100%", md: "260px" }} flexShrink={0}>
            <Sidebar />
          </Box>
          <Box flex={1}>
            <CoffeeList />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default App;
