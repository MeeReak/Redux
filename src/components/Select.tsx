import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  const handleValueChange = (value: string) => {};

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-fit bg-gray-950 text-white">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="todo">To Do</SelectItem>
          <SelectItem value="in-progress">In Process</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
