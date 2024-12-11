"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, Todo, updateTodo } from "@/redux/feature/todo/slice";
import { RootState } from "@/redux/store";
import { v4 as uuidv4 } from "uuid";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  note: z.string().min(10, {
    message: "Note must be at least 10 characters.",
  }),
  status: z.enum(["todo", "in-progress", "done"]),
});

interface ToDoFormProps {
  closeDialog: () => void; // Accept closeDialog function as a prop
  id?: string;
}

export function ToDoForm({ closeDialog, id }: ToDoFormProps) {
  const todos = useSelector((state: RootState) => state.todos.items);
  const selectTodo = todos.find(
    (todo: Todo) => todo.id !== undefined && todo.id === id
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: selectTodo ? selectTodo.title : "",
      note: selectTodo ? selectTodo.note : "",
      status: selectTodo ? selectTodo.status : "todo", // Provide a default status value
    },
  });

  const dispatch = useDispatch();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Close the dialog after form submission
    closeDialog();
    dispatch(
      addTodo({
        id: uuidv4(),
        title: values.title,
        status: values.status,
        note: values.note,
      })
    );
  }

  function onUpdate(values: z.infer<typeof formSchema>) {
    // Close the dialog after form submission
    closeDialog();
    dispatch(
      updateTodo({
        id: selectTodo!.id,
        title: values.title,
        status: values.status,
        note: values.note,
      })
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(selectTodo ? onUpdate : onSubmit)} // Conditionally handle submit
        className="space-y-4"
      >
        {/* Title Field */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Type Task" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Status Field */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <div className="flex flex-col space-y-1.5">
              <FormLabel>Status</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">To Do</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </div>
          )}
        />

        {/* Note Field */}
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Note</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" flex gap-x-2 justify-end">
          <Button
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              closeDialog();
            }}
          >
            Cancel
          </Button>
          {selectTodo ? (
            <Button type="submit">Update</Button> // For updating
          ) : (
            <Button type="submit">Submit</Button> // For adding
          )}
        </div>
      </form>
    </Form>
  );
}
