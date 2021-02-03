/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./input.css";
import { useDispatch } from "react-redux-hook";
import saveTodo from "../features/todoSlice";
const input = () => {
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
