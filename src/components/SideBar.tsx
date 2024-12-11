"use client";

import React, { Suspense } from "react";
import { Input } from "./ui/input";
import { SelectDemo } from "./Select";
import { useRouter, useSearchParams } from "next/navigation";

export const NavBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Suspense>
      <div className=" h-screen bg-gray-100 pt-5 w-[350px]">
        <div className="flex items-center gap-x-2 justify-center">
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const currentStatus = searchParams.get("status");
              router.push(`?search=${e.target.value}&status=${currentStatus}`);
            }}
            className=" w-fit bg-white"
          />
          <SelectDemo router={router} />
        </div>
      </div>
    </Suspense>
  );
};
