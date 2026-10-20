import { useCallback, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

const UseCallbackDemo = () => {
  return (
    <>
      <App />
    </>
  );
};
export default UseCallbackDemo;
