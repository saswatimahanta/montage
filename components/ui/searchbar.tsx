"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Searchbar = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <Input
        type="search"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        size={20}
      />
    </div>
  );
};

export default Searchbar;
