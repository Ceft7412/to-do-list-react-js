import React from "react";

export default function Header() {
  return (
    <header className="bg-slate-800 text-white fixed top-0 left-0 right-0 h-18 p-4 border-b  font-medium z-20">
      <div className="w-full h-full relative flex items-center justify-between">
        <span>Logo</span>
        <span className="sm:absolute sm:left-[50%] sm:-translate-x-[50%] text-[20px]">
          To-do-list
        </span>
        <span className="hidden sm:block">Cedrick Caceres</span>
      </div>
    </header>
  );
}
