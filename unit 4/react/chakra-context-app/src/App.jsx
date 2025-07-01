import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box flex="1">
        <CardGrid />
      </Box>
      <Footer />
    </Box>
  );
}
