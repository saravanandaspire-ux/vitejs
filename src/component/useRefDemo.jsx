import { useRef, useState, useEffect } from 'react';
//focuse input use Ref
const UseRef1 = () => {
  const inputRef = useRef(null);
  const ClickEve = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <br />
      <input ref={inputRef} /> <br />
      <button onClick={ClickEve}> Click</button>
    </>
  );
};

//focus count rerendeing
const UseRef2 = () => {
  const count = useRef(0);
  const [input, setInput] = useState('');

  const eveChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <input onChange={eveChange} />
      <br />
      {input}
      <br />
      {count.current}
    </>
  );
};

//update count without re-rendering
const Counter = () => {
  const count = useRef(0);

  const handleClick = () => {
    count.current++;
    console.log('Count:', count.current);
  };

  console.log('Component rendered');

  return (
    <div>
      <button onClick={handleClick}>Update Count</button>
      {count.current}
    </div>
  );
};

const UseRefDemo = () => {
  return (
    <>
      <br />
      UseRef
      <UseRef1 />
      <hr />
      <UseRef2 />
      <hr />
      <Counter />
    </>
  );
};

export default UseRefDemo;
