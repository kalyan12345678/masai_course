import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
