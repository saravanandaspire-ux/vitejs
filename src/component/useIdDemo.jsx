import { useId } from "react";
//useId() is a React Hook that generates a unique ID for accessibility attributes in your UI.
//It is mainly used to connect form labels, input fields, and error or help messages. 
//It helps ensure that IDs are unique when you reuse the same component multiple times.

function App() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Username:</label>
      <input id={id} type="text" />
    </div>
  );
}
function LoginForm() {
  const id = useId();

  return (
    <form>
      {id}
      <div>
        <label htmlFor={`${id}-email`}>Email:</label>
        <input id={`${id}-email`} type="email" />
      </div>

      <div>
        <label htmlFor={`${id}-password`}>Password:</label>
        <input id={`${id}-password`} type="password" />
      </div>
    </form>
  );
}

const UseIdDemo=()=>{
    return(
        <>
        <hr/>
            <App/>
            <hr/>
            <LoginForm />
        </>
    )
}
export default UseIdDemo;

// Line-by-line explanation:
// 1. useId is imported from React.
// 2. useId() generates an ID for this component instance.
// 3. htmlFor={id} connects the label to the input.
// 4. id={id} assigns the same ID to the input.
// 5. When the user clicks the label, the browser focuses the associated input.