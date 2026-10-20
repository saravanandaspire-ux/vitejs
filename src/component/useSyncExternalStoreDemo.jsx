import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function App() {
  const isOnline = useSyncExternalStore(
    subscribe,
    getSnapshot
  );

  return (
    <h2>
      Internet status: {isOnline ? "Online" : "Offline"}
    </h2>
  );
}

export default App;

// useSyncExternalStore() is a React Hook used to subscribe to data stored outside React. It accepts a 
//subscription function and a function that reads the current snapshot. React uses these functions to keep the 
//component synchronized with changes in the external store.

// Line-by-line explanation:
// 1. subscribe() registers listeners for browser online and offline events.
// 2. callback tells React to check the snapshot again when an event occurs.
// 3. The returned cleanup function removes both event listeners.
// 4. getSnapshot() reads the current internet connection status.
// 5. useSyncExternalStore() subscribes the component to these changes.
// 6. The UI displays Online or Offline based on the current status.
// Real-world use: Integrating external state stores or subscribing to browser APIs.

// Note: Server-rendered applications should also provide a suitable getServerSnapshot function.