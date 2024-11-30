import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "../types/todo";

const initialState: TodoState = {
  tasks: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        complete: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
