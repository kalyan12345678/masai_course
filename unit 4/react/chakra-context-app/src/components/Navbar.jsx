import { Flex, Button, Spacer, useColorMode, Box } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, toggleAuth } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex p={4} bg="teal.500" color="white" align="center">
      <Box fontWeight="bold">Chakra Context App</Box>
      <Spacer />
      <Button size="sm" onClick={toggleAuth} mr={3}>
        {isLoggedIn ? "Logout" : "Login"}
      </Button>
      <Button size="sm" onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Flex>
  );
}
