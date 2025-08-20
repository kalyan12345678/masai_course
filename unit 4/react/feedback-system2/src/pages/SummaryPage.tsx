import React from "react";
import { useFeedback } from "../context/FeedbackContext";

const SummaryPage: React.FC = () => {
  const { feedback } = useFeedback();
  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Feedback Summary</h2>
      <p><b>Name:</b> {feedback.name}</p>
      <p><b>Email:</b> {feedback.email}</p>
      <p><b>Rating:</b> {feedback.rating}</p>
      <p><b>Comments:</b> {feedback.comments}</p>
    </div>
  );
};

export default SummaryPage;
