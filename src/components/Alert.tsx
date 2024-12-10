"use client";

import {
  AlertDialog,
  // AlertDialogCancel,
  AlertDialogContent,
  // AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ToDoForm } from "./ToDoForm";
import { useState } from "react";

export function Alert({
  children,
  buttonStyle,
  id,
  className,
}: {
  children: React.ReactNode;
  buttonStyle?: string;
  id?: string;
  className?: string;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <div
          // variant="outline"
          className={buttonStyle}
          onClick={openDialog}
        >
          {/* Show Dialog */}
          {children}
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className={`max-w-[400px] ${className}`}>
        <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
          <ToDoForm id={id} closeDialog={closeDialog} />
        </AlertDialogHeader>
        {/* <AlertDialogFooter>
          <AlertDialogCancel onClick={closeDialog}>Cancel</AlertDialogCancel>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}
