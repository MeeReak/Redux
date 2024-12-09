import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id?: string;
  title: string;
  status: "todo" | "in-progress" | "done";
  note?: string;
}

export interface TodoState {
  items: Todo[];
}

const initialState: TodoState = {
  items: [
    {
      id: "1",
      title: "Learn Redux",
      status: "todo",
      note: "Learn Redux with Redux Toolkit.",
    },
    {
      id: "2",
      title: "Learn React",
      status: "in-progress",
      note: "Learn React with Next.js.",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const update = state.items.find((todo) => todo.id === action.payload.id);
      update!.title = action.payload.title;
      update!.status = action.payload.status;
      update!.note = action.payload.note;
    },
  },
});

export const { addTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
