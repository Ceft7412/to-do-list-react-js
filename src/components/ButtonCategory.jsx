import React from "react";

export default function ButtonCategory({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border rounded-md p-1 w-24 bg-black/[0.90] text-white hover:bg-black/[0.99] hover:scale-105 duration-300"
    >
      {children}
    </button>
  );
}
