import React from "react";

export default function Error({ errorMessage }) {
  return (
    <div className="absolute bottom-12 left-6 p-3 text-white bg-red-500">
      {errorMessage}
    </div>
  );
}
