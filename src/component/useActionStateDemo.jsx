import { useActionState } from "react";

async function submitForm(previousState, formData) {
  const name = formData.get("name");

  if (!name) {
    return "Please enter your name";
  }

  return `Welcome, ${name}!`;
}

function App() {
  const [message, formAction, isPending] =
    useActionState(submitForm, "");

  return (
    <form action={formAction}>
      <input name="name" placeholder="Enter your name" />

      <button disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>

      <p>{message}</p>
    </form>
  );
}

export default App;
//useActionState() is a React Hook used to manage the result of an Action, such as a form submission. It returns 
//the current result state, a function to invoke the Action, and an isPending flag. This makes it easier to 
//manage submission results and pending states.

// Line-by-line explanation:
// 1. submitForm() defines the Action that handles form data.
// 2. previousState contains the previous Action result.
// 3. formData.get("name") retrieves the submitted name.
// 4. The function returns a validation message if the name is missing.
// 5. Otherwise, it returns a welcome message.
// 6. useActionState() provides the result, form Action, and pending status.
// 7. The form uses formAction to handle submission.
// 8. The button displays a pending message while the Action is running.
// 9. The paragraph displays the returned result.