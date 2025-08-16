import React from 'react';
const MentorDashboard = ({ entries }) => (
  <div>
    <h2>Mentor Dashboard</h2>
    <ul>
      {entries.map((entry, i) => (
        <li key={i}>
          <strong>{entry.student}</strong>: {entry.habit} - {entry.reflection}
        </li>
      ))}
    </ul>
  </div>
);
export default MentorDashboard;
