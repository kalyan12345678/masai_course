import React from "react";
import { useSelector } from "react-redux";
import { Grid, Box, Text, Image, Spinner } from "@chakra-ui/react";

const CoffeeList = () => {
  const { loading, error, data } = useSelector((state) => state.coffee);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">Something went wrong</Text>;

  return (
    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6} p={4}>
      {data.map((coffee) => (
        <Box key={coffee.id} borderWidth="1px" p={4} borderRadius="md" boxShadow="md" bg="white" _hover={{ boxShadow: "xl", transform: "scale(1.03)" }} transition="all 0.2s">
          <Image src={coffee.image} alt={coffee.name} boxSize="180px" objectFit="cover" mx="auto" mb={3} borderRadius="md" />
          <Text fontWeight="bold" fontSize="lg" mb={1}>{coffee.name}</Text>
          {coffee.price !== undefined && (
            <Text color="teal.600" fontWeight="semibold">Price: ₹{coffee.price}</Text>
          )}
          {coffee.description && (
            <Text fontSize="sm" color="gray.600" mt={2}>{coffee.description}</Text>
          )}
        </Box>
      ))}
    </Grid>
  );
};

export default CoffeeList;
