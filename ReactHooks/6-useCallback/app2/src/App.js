import React, { useState, useCallback } from 'react';
import Box from './Box';

function App() {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // const createBoxStyle = () => {
  //   return {
  //     backgroundColor: 'greenyellow',
  //     width: `${size}px`,
  //     height: `${size}px`,
  //   };
  // };

  // useCallback으로 ...
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: 'greenyellow',
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div 
    style={{ 
      background: isDark ? "black" : "white",
    }}>
      <input 
        type="number"
        value={size}
        onChange={(e) => setSizes(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default App;
