import { Alert } from "@/components/Alert";
import { Todos } from "@/components/Pages/Todos";
import { PlusIcon } from "lucide-react";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  // You can await the searchParams if it's a promise
  const resolvedSearchParams = await searchParams;
  const search = resolvedSearchParams.search;

  return (
    <>
      <Todos search={search!} />
      <Alert buttonStyle="fixed bottom-5 right-5 rounded-full p-4 shadow-sm bg-gray-100">
        <PlusIcon />
      </Alert>
    </>
  );
}
