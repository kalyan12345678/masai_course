import React, { createContext, useContext, useState } from "react";
import type { Message, ChatContextType } from "../types";

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const addMessage = (msg: Message) => setMessages((prev) => [...prev, msg]);

  const sendMessage = async (text: string) => {
    setLoading(true);
    const userMsg: Message = {
      id: Date.now() + "-user",
      text,
      sender: "user",
      timestamp: Date.now(),
    };
    addMessage(userMsg);
    // Simulate AI response (replace with API call)
    setTimeout(() => {
      addMessage({
        id: Date.now() + "-ai",
        text: `AI: ${text}`,
        sender: "ai",
        timestamp: Date.now(),
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, sendMessage, loading }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within ChatProvider");
  return context;
};
