import React, { useState } from "react";
import "./input.css";
import useDispatch from "react-redux";
import saveTodo from "../features/todoSlice";
const input = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { input, setInput } = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default input;
