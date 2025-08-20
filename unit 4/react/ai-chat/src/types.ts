export interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: number;
}

export interface ChatContextType {
  messages: Message[];
  addMessage: (msg: Message) => void;
  sendMessage: (text: string) => Promise<void>;
  loading: boolean;
}
