import React, { useRef, useEffect } from "react";
import { useChat } from "../context/ChatContext";
import MessageBubble from "./MessageBubble";
import "./ChatWindow.css";

const ChatWindow: React.FC = () => {
  const { messages } = useChat();
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default ChatWindow;
