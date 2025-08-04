import React, { useState } from 'react';
import TimerConfirmation from '../components/TimerConfirmation';

const Home = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {!showConfirmation ? (
        <button onClick={() => setShowConfirmation(true)}>Fetch Data</button>
      ) : (
        <TimerConfirmation onCancel={() => setShowConfirmation(false)} />
      )}
    </div>
  );
};

export default Home;
