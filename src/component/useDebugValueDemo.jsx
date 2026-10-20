import { useDebugValue, useState } from "react";

function useOnlineStatus() {
  const [isOnline] = useState(true);

  useDebugValue(isOnline ? "Online" : "Offline");

  return isOnline;
}

function App() {
  const isOnline = useOnlineStatus();

  return <h2>{isOnline ? "Online" : "Offline"}</h2>;
}

export default App;

//useDebugValue() is a React Hook used to display helpful debugging information for a custom Hook in React Developer Tools. 
//It does not update the component's UI and is mainly useful when developing reusable Hooks that manage complex behavior.

// Line-by-line explanation:
// 1. useOnlineStatus() is a custom Hook.
// 2. useState() stores the example's online status.
// 3. useDebugValue() provides a readable label in React Developer Tools.
// 4. The custom Hook returns the status to its caller.
// 5. App reads the status and displays it on the screen.