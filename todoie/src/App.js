import react, { useState } from "react";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import Butoon from "./Components/Button";
import './style.css'

const CounterComp = () => {
  const [count, setCount] = useState(2);
  const [value, setValue] = useState("taloo");
  return (
    <div>
      <p>count - {count}</p>
      <h6>value is {value}</h6>
      <button onClick={() => setValue(count % 2 === 0 ? "even" : "odd")}>Change</button>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <button onClick={() => setCount(count - 1)}>dec</button>
    </div>
  )
}

const App = () => {
  return (

    <div className="todo-cont">
      <CounterComp />
      <Header title='today Task' />
      <TodoItem text='Eat' completed='true' />
      <TodoItem text='code' />
      <TodoItem text='chai' />
      <TodoItem />
      <TodoItem />
      <Butoon />
    </div>
  );
};

export default App;