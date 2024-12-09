import { Alert } from "@/components/Alert";
import { Todos } from "@/components/Pages/Todos";
import { PlusIcon } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <>
      <Todos />
      <Alert buttonStyle=" fixed bottom-5 right-5 rounded-full py-6 shadow-sm">
        <PlusIcon />
      </Alert>
    </>
  );
}
