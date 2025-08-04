import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TimerConfirmation = ({ onCancel }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      onCancel(); // timer ran out
      return;
    }
    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft, onCancel]);

  const handleYes = () => navigate('/data');
  const handleNo = () => onCancel();

  const timerStyle = {
    fontSize: '2rem',
    color: timeLeft > 5 ? 'green' : 'red',
    marginBottom: '10px',
  };

  return (
    <div>
      <p>Are you sure you want to fetch the data?</p>
      <div style={timerStyle}>{timeLeft}</div>
      <button onClick={handleYes} style={{ marginRight: '10px' }}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
};

export default TimerConfirmation;
