import { useState } from "react"
import UserComponent from "./UserComponent ";
import TodoList from "./TodoList";


function App() {
  const [count, setCount] = useState<number>(0)


  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };




  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <UserComponent />
      <TodoList />


    </>
  )
}

export default App
