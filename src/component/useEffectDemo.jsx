import { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');

  // 1. Runs after every render
  useEffect(() => {
    console.log('Every render');
  });

  // 2. Runs after the initial render
  useEffect(() => {
    console.log('Initial render');

    // Cleanup on unmount
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  // 3. Runs initially and when count changes
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  // 4. Runs initially and when name changes
  useEffect(() => {
    console.log('Name changed:', name);
  }, [name]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <h2>Name: {name}</h2>
      <button onClick={() => setName('Developer')}>Change Name</button>
    </div>
  );
};
const UseEffectDemo = () => {
  return <App />;
};

export default UseEffectDemo;
