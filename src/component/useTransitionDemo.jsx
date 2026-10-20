import { useState, useTransition } from "react";

function App() {
  const [tab, setTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  function changeTab() {
    startTransition(() => {
      setTab("products");
    });
  }

  return (
    <div>
      <button onClick={changeTab}>Show Products</button>

      {isPending && <p>Loading...</p>}

      {tab === "products" && <h2>Product List</h2>}
    </div>
  );
}

export default App;


// useTransition() is a React Hook used to mark a state update as non-urgent. It helps keep the UI responsive when 
//an update requires rendering a large amount of content. React returns isPending to indicate whether the transition 
//is still in progress and startTransition to mark the update as a transition.

// Line-by-line explanation:
// 1. useState() stores the currently selected tab.
// 2. useTransition() provides isPending and startTransition.
// 3. changeTab() handles the button click.
// 4. startTransition() marks the tab update as non-urgent.
// 5. isPending indicates whether the transition is pending.
// 6. The product list is displayed when the selected tab becomes products.
// Real-world use: Switching between large product categories without making the interface feel unresponsive.