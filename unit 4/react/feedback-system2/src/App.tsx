import React from "react";
import { Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import SummaryPage from "./pages/SummaryPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/summary" element={
        <ProtectedRoute>
          <SummaryPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
