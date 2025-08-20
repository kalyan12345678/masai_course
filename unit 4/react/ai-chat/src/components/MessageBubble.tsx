import React from "react";
import "./MessageBubble.css";
import type { Message } from "../types";

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => (
  <div className={`bubble ${message.sender}`}>
    <span>{message.text}</span>
    <div className="timestamp">{new Date(message.timestamp).toLocaleTimeString()}</div>
  </div>
);

export default MessageBubble;
