import React from "react";
import { Navigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { feedback } = useFeedback();
  if (!feedback.name || !feedback.email) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
