import { Alert } from "@/components/Alert";
import { Todos } from "@/components/Pages/Todos";
import { PlusIcon } from "lucide-react";
import React from "react";

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const search = searchParams.search;

  return (
    <>
      <Todos search={search} />
      <Alert buttonStyle=" fixed bottom-5 right-5 rounded-full p-4 shadow-sm bg-gray-100 ">
        <PlusIcon />
      </Alert>
    </>
  );
}
