import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SelectDemo({ router }: { router: any }) {
  const searchParam = useSearchParams();

  const handleValueChange = (value: string) => {
    const currentSearch = searchParam.get("search");
    if (currentSearch) {
      router.push(`?search=${currentSearch}&status=${value}`);
    } else {
      router.push(`?status=${value}`);
    }
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-fit bg-gray-950 text-white">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Status</SelectLabel> */}
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="todo">To Do</SelectItem>
          <SelectItem value="in-progress">In Process</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
