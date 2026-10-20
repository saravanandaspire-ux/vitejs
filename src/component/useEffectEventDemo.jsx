import { useEffect, useEffectEvent, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const onConnected = useEffectEvent(() => {
    console.log("Connected using theme:", theme);
  });

  useEffect(() => {
    console.log("Connecting...");

    onConnected();

    return () => {
      console.log("Disconnecting...");
    };
  }, []);

  return (
    <button
      onClick={() =>
        setTheme(current =>
          current === "light" ? "dark" : "light"
        )
      }
    >
      Current theme: {theme}
    </button>
  );
}

export default App;

// useEffectEvent() is a React Hook used to separate non-reactive logic from an Effect while allowing that 
//logic to read the latest props and state. It helps prevent an Effect from needing to re-run just because a 
//value changes when that value should not determine the Effect's lifecycle.

// Line-by-line explanation:
// 1. theme stores the current theme.
// 2. useEffectEvent() defines logic that reads the latest theme value when called.
// 3. onConnected() logs the theme at the time it is invoked.
// 4. useEffect() runs the connection setup after the component mounts.
// 5. The Effect invokes onConnected().
// 6. The cleanup function runs when the Effect is cleaned up.
// 7. Clicking the button changes the theme.
// 8. Changing the theme does not, by itself, restart this Effect.