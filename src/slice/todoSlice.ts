import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "../types/todo";

const initialState: TodoState = {
  tasks: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        complete: false,
      });
    },
    removeTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.complete = !task.complete;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoStatus, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
