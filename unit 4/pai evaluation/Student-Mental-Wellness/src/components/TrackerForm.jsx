import React, { useState } from 'react';

const TrackerForm = ({ onSubmit }) => {
  const [habit, setHabit] = useState('');
  const [reflection, setReflection] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ habit, reflection });
    setHabit('');
    setReflection('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Daily habit (e.g. Studied 2hr)"
        value={habit}
        onChange={e => setHabit(e.target.value)}
        required
      />
      <textarea
        placeholder="Reflection (How did you feel?)"
        value={reflection}
        onChange={e => setReflection(e.target.value)}
        required
      />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default TrackerForm;
