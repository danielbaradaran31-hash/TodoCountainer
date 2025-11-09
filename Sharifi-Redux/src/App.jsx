import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { decrease, increase, reste } from "./redux/counterSlice";

export default function App() {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>
      <h2>{counter}</h2>

      <div>
        <button onClick={() => dispatch(increase())}>➕ Increase</button>
        <button onClick={() => dispatch(decrease())}>➖ Decrease</button>
        <button onClick={() => dispatch(reste())}>🔄 Reset</button>
      </div>
    </div>
  );
}
