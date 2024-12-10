"use client";

import React from "react";
import { Input } from "./ui/input";
import { SelectDemo } from "./Select";
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const router = useRouter();

  return (
    <div className=" h-screen bg-gray-100 pt-5 w-[350px]">
      <div className="flex items-center gap-x-2 justify-center">
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            router.push(`?search=${e.target.value}`);
          }}
          className=" w-fit bg-white"
        />
        <SelectDemo />
      </div>
    </div>
  );
};
