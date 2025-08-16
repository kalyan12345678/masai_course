import React from 'react';
const InsightsPanel = ({ insights }) => (
  <div>
    <h3>7-Day Insights</h3>
    <ul>
      {insights.map((insight, i) => (
        <li key={i}>{insight}</li>
      ))}
    </ul>
  </div>
);
export default InsightsPanel;
