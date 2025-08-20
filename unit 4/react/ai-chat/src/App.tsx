import React from "react";
import { ChatProvider } from "./context/ChatContext";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import "./styles/global.css";

const App: React.FC = () => (
  <ChatProvider>
    <div style={{ width: 400, background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", padding: 24 }}>
      <h2 style={{ textAlign: "center", marginBottom: 16 }}>AI Chat</h2>
      <ChatWindow />
      <ChatInput />
    </div>
  </ChatProvider>
);

export default App;
