"use client";

import { useState } from "react";

export function Header() {
  const [search, setSearch] = useState("");
  const userInitials = "A";

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-600 py-4 gap-4">
      <h1 className="text-[22px] sm:text-[26px] font-semibold leading-tight">
        Hi Arthur, welcome! You have 12 open tasks.
      </h1>

      <div className="flex w-full sm:w-auto gap-3">
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow sm:flex-grow-0 w-full sm:w-[320px] px-3 py-2 rounded-[16px] text-[14px] sm:text-[12px] bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#172963] text-white font-semibold text-lg select-none">
          {userInitials}
        </div>
      </div>
    </header>
  );
}
