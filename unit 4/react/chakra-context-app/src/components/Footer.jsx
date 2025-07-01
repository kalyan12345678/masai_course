import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  const bg = useColorModeValue("gray.200", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={color} p={4} textAlign="center">
      <Text>© 2025 Chakra Context App</Text>
    </Box>
  );
}
