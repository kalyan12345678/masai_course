import React, { useState } from "react";

// ✅ Define types for form data
type FeedbackFormData = {
  name: string;
  email: string;
  rating: number | "";
  feedback: string;
};

const FeedbackForm: React.FC = () => {
  // ✅ State with type
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  // ✅ Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.rating || !formData.feedback) {
      alert("Please fill out all fields before submitting!");
      return;
    }

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      rating: "",
      feedback: "",
    });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Feedback Form</h2>

      {submitted && (
        <div style={{ background: "#d4edda", padding: "10px", marginBottom: "10px" }}>
          ✅ Thank you for your feedback!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Rating (1-5):</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
          />
        </div>

        <div>
          <label>Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
