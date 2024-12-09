"use client";

import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "../Alert";

export const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos.items);

  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center cursor-pointer">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 w-[280px] hover:transform hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300 ease-in-out relative"
        >
          <Alert id={todo.id}>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              {todo.title}
            </h2>
            <p className="text-base text-gray-600 mb-4">{todo.note}</p>
            <p
              className={`text-sm font-medium ${
                todo.status === "done"
                  ? "text-green-500"
                  : todo.status === "in-progress"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {todo.status}
            </p>
          </Alert>
        </div>
      ))}
    </div>
  );
};
