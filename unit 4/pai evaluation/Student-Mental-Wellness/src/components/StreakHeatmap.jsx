import React from 'react';
// Dummy heatmap, replace with calendar heatmap library for production
const StreakHeatmap = ({ streaks }) => (
  <div>
    <h3>Streak Heatmap</h3>
    <div style={{ display: 'flex', gap: 4 }}>
      {streaks.map((active, i) => (
        <div key={i} style={{ width: 20, height: 20, background: active ? '#4caf50' : '#eee' }} />
      ))}
    </div>
  </div>
);
export default StreakHeatmap;
