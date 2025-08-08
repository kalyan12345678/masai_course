import React from 'react';

const HistoryList = ({ history }) => {
  return (
    <div className="history-list">
      <h3>History</h3>
      <ul>
        {history.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;
