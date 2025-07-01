import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue
} from "@chakra-ui/react";

export default function CardGrid() {
  const cardBg = useColorModeValue("gray.100", "gray.700");

  const cards = Array.from({ length: 6 }, (_, i) => `Card ${i + 1}`);

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} p={6}>
      {cards.map((title, idx) => (
        <Box
          key={idx}
          p={5}
          bg={cardBg}
          borderRadius="md"
          shadow="md"
        >
          <Text fontWeight="bold">{title}</Text>
          <Text>This card adapts to the theme.</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
