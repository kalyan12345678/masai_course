import React from "react";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";
import Field from "../components/Field";

const FormPage: React.FC = () => {
  const { feedback, setFeedback } = useFeedback();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: name === "rating" ? Number(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/summary");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <Field label="Name" name="name" value={feedback.name} onChange={handleChange} required />
      <Field label="Email" name="email" value={feedback.email} onChange={handleChange} required type="email" />
      <Field label="Rating" name="rating" value={feedback.rating} onChange={handleChange} required type="number" min={1} max={5} />
      <Field label="Comments" name="comments" value={feedback.comments} onChange={handleChange} multiline />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPage;
