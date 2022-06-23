import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(5);
  const [task, setTask] = useState("");

  const handleIncrement = () => setCount(count + Number(task));
  const handleDecrement = () => setCount(count - Number(task));
  const handleTask = (event) => {
    setTask(event.target.value);
  };

  return (
    <div className="container">
      <label>
        haha
        <input value={task} onChange={handleTask} />
      </label>
      <div
        className="chevron chevron-up"
        onClick={handleIncrement}
        style={{ visibility: count >= 10 && "hidden" }}
      />
      <div className="number">{count}</div>
      <div
        className="chevron chevron-down"
        onClick={handleDecrement}
        style={{
          visibility: count <= 0 && "hidden",
        }}
      />
    </div>
  );
};

export default App;
