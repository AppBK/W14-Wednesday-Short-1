import { useState } from 'react';
import './UseState.css';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);
  
  return (
    <div className={`${theme} state`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      <h1>{count}</h1>
      <br/>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
    </div>
  );
};

export default UseState;