import React from "react";
import { useSelector } from "react-redux";
import { Grid, Box, Text, Image, Spinner } from "@chakra-ui/react";

const CoffeeList = () => {
  const { loading, error, data } = useSelector((state) => state.coffee);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">Something went wrong</Text>;

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} p={4}>
      {data.map((coffee) => (
        <Box key={coffee.id} borderWidth="1px" p={4} borderRadius="md">
          <Image src={coffee.image} alt={coffee.name} />
          <Text fontWeight="bold">{coffee.name}</Text>
          <Text>Price: ₹{coffee.price}</Text>
        </Box>
      ))}
    </Grid>
  );
};

export default CoffeeList;
