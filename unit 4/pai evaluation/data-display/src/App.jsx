import React, { useEffect, useState } from 'react';
import UserList from './components/UserList';

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div
        style={{
          padding: '10px',
          backgroundColor: isOnline ? '#d4edda' : '#f8d7da',
          color: isOnline ? '#155724' : '#721c24',
          marginBottom: '20px',
          borderRadius: '5px',
          fontWeight: 'bold',
        }}
      >
        {isOnline ? '✅ You are online' : '🔴 No internet connection'}
      </div>

      <UserList />
    </div>
  );
};

export default App;
