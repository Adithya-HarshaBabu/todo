import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoslice";
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
