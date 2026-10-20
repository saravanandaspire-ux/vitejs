import { useOptimistic, useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  const [optimisticLikes, addOptimisticLike] =
    useOptimistic(
      likes,
      (currentLikes, amount) => currentLikes + amount
    );

  async function handleLike() {
    addOptimisticLike(1);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setLikes(currentLikes => currentLikes + 1);
  }

  return (
    <div>
      <h2>Likes: {optimisticLikes}</h2>

      <button onClick={handleLike}>
        Like
      </button>
    </div>
  );
}

export default App;

// useOptimistic() is a React Hook used to update the UI immediately while an asynchronous Action is in progress. 
//The UI shows the expected result before the server confirms it, making the application feel faster. If the
 //operation fails, the application should reconcile the displayed state with the actual state.

// Line-by-line explanation:
// 1. likes stores the confirmed number of likes.
// 2. useOptimistic() creates an optimistic version of that value.
// 3. The reducer adds the requested amount to the current optimistic count.
// 4. handleLike() starts the optimistic update.
// 5. addOptimisticLike(1) immediately requests a temporary increase.
// 6. The asynchronous operation simulates a server request.
// 7. setLikes() updates the confirmed state when the operation completes.
// 8. The heading displays the optimistic count.