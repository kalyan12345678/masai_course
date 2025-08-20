export interface Feedback {
  name: string;
  email: string;
  rating: number;
  comments: string;
}

export interface FeedbackContextType {
  feedback: Feedback;
  setFeedback: React.Dispatch<React.SetStateAction<Feedback>>;
}
