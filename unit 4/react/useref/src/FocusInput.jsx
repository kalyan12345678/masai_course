import React, { useRef, useState } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = '#ffe066';
      setFocused(true);
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: '2rem auto', textAlign: 'center' }}>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" style={{ padding: '0.5rem', width: '100%' }} />
      <br />
      <button onClick={handleFocus} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Focus Input</button>
      {focused && <div style={{ marginTop: '1rem', color: '#16a085', fontWeight: 'bold' }}>Focused!</div>}
    </div>
  );
};

export default FocusInput;
