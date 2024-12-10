"use client";

import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "../Alert";
import { XIcon } from "lucide-react";
import { deleteTodo, Todo } from "@/redux/feature/todo/slice";

export const Todos = ({ search }: { search: string }) => {
  const todos = useSelector((state: RootState) => state.todos.items);
  const dispatch = useDispatch();

  const filterTodo = search
    ? todos.filter((_: Todo) => {
        return _.title.toLowerCase().includes(search.toLowerCase());
      })
    : todos;

  // Status badge styles
  const getStatusBadgeClasses = (status: string) => {
    switch (status) {
      case "done":
        return "text-green-500 bg-green-100 px-3 py-1 rounded-full w-fit";
      case "in-progress":
        return "text-yellow-500 bg-yellow-100 px-3 py-1 rounded-full w-fit";
      default:
        return "text-red-500 bg-red-100 px-3 py-1 rounded-full w-fit";
    }
  };

  // Todo item component
  const TodoItem = ({ todo }: { todo: Todo }) => (
    <div className="bg-white rounded-lg cursor-pointer shadow-md p-6 w-[280px] hover:transform hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300 ease-in-out flex justify-between">
      <Alert className="" id={todo.id}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              {todo.title}
            </h2>
            <p className="text-base text-gray-600 mb-4">{todo.note}</p>
          </div>
          <p className={getStatusBadgeClasses(todo.status)}>{todo.status}</p>
        </div>
      </Alert>
      <XIcon
        className="bg-gray-100 p-1 rounded-full cursor-pointer hover:bg-gray-200"
        onClick={() => dispatch(deleteTodo(todo.id as string))}
        aria-label={`Delete todo ${todo.title}`}
      />
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-6 py-6">
      {filterTodo.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
