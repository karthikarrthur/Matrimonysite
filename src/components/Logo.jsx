import React from "react";

export default function ShaadiRootsLogo() {
  return (
    <div className="flex items-center space-x-2">
      {/* Heart Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="red"
        viewBox="0 0 24 24"
        stroke="red"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 21C12 21 4 14 4 8a4 4 0 018-4 4 4 0 018 4c0 6-8 13-8 13z"
        />
      </svg>

      {/* Name */}
      <h1 className="text-violet-600 font-bold text-3xl tracking-wide">
        shaadiroots
      </h1>
    </div>
  );
}
