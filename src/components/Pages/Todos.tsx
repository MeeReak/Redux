"use client";

import React, { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { RootState } from "@/redux/store";
import { deleteTodo, Todo } from "@/redux/feature/todo/slice";
import { Alert } from "../Alert";
import { XIcon } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
}

const getStatusBadgeClasses = (status: string) => {
  switch (status) {
    case "done":
      return "text-green-500 bg-green-100 px-4 py-1 rounded-full w-fit";
    case "in-progress":
      return "text-yellow-500 bg-yellow-100 px-4 py-1 rounded-full w-fit";
    default:
      return "text-red-500 bg-red-100 px-4 py-1 rounded-full w-fit";
  }
};

// Memoize the TodoItem to avoid unnecessary re-renders
// eslint-disable-next-line react/display-name
const TodoItem = React.memo(({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(deleteTodo(todo.id as string));
  }, [dispatch, todo.id]);

  return (
    <div
      id={`${todo.id}`}
      className="bg-white rounded-lg cursor-pointer shadow-md p-6 w-[280px] hover:transform hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-300 ease-in-out flex justify-between"
    >
      <Alert id={todo.id}>
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
        onClick={handleDelete}
        aria-label={`Delete todo ${todo.title}`}
      />
    </div>
  );
});

interface TodosProps {
  search: string;
}

export const Todos = ({ search }: TodosProps) => {
  const todos = useSelector((state: RootState) => state.todos.items);
  const status = useSearchParams().get("status");

  // Filter todos based on search and status query params
  const filteredTodos = useMemo(() => {
    let filtered = todos;

    if (search) {
      filtered = filtered.filter(
        (todo: Todo) =>
          todo.title.toLowerCase().includes(search.toLowerCase()) ||
          todo.note?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status && status !== "all") {
      filtered = filtered.filter(
        (todo: Todo) => todo.status.toLowerCase() === status.toLowerCase()
      );
    }

    return filtered;
  }, [todos, search, status]);

  return (
    <div className="flex flex-wrap justify-center gap-6 py-6">
      {filteredTodos.length === 0 ? (
        <p className="text-gray-500">No todos found matching your criteria.</p>
      ) : (
        filteredTodos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};
