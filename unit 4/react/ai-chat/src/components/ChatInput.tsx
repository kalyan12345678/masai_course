import React, { useState } from "react";
import { useChat } from "../context/ChatContext";
import "./ChatInput.css";

const ChatInput: React.FC = () => {
  const [text, setText] = useState("");
  const { sendMessage, loading } = useChat();

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    await sendMessage(text);
    setText("");
  };

  return (
    <form className="chat-input" onSubmit={handleSend}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        disabled={loading}
      />
      <button type="submit" disabled={loading || !text.trim()}>
        {loading ? "..." : "Send"}
      </button>
    </form>
  );
};

export default ChatInput;
