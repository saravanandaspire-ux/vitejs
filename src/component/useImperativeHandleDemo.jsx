import {
    useRef,
    useImperativeHandle,
    useState
  } from "react";
  
  function CustomInput({ ref }) {
    const inputRef = useRef(null);
  
    useImperativeHandle(ref, () => ({
      focus() {
        inputRef.current?.focus();
      },
  
      clear() {
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    }), []);
  
    return <input ref={inputRef} />;
  }
  
  function App() {
    const inputRef = useRef(null);
  
    return (
      <div>
        <CustomInput ref={inputRef} />
  
        <button onClick={() => inputRef.current.focus()}>
          Focus
        </button>
  
        <button onClick={() => inputRef.current.clear()}>
          Clear
        </button>
      </div>
    );
  }
  
  export default App;