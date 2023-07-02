import { IButton } from "@/types/button";
import React from "react";

export default function Button({ text, children }: IButton) {
  return (
    <button
      type="submit"
      className="flex justify-around items-center min-w-[400px] max-w-md border rounded-lg bg-yellow-400 font-poppins p-2 text-txcolor   hover:border hover:border-yellow-400 hover:bg-txcolor hover:text-yellow-400 transition-all "
    >
      {text}
      {children}
    </button>
  );
}
