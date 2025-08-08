import { VStack, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getCoffee } from "../redux/coffee/coffee.actions";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSort = (order) => {
    dispatch(getCoffee(order));
  };

  return (
    <VStack spacing={4} align="start" p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
      <Button colorScheme="teal" variant="solid" w="full" onClick={() => handleSort("")}>Default Order</Button>
      <Button colorScheme="teal" variant="outline" w="full" onClick={() => handleSort("asc")}>Sort by Price: Low to High</Button>
      <Button colorScheme="teal" variant="outline" w="full" onClick={() => handleSort("desc")}>Sort by Price: High to Low</Button>
    </VStack>
  );
};

export default Sidebar;
