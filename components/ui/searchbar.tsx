"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Searchbar = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <Input
        type="search"
        placeholder="Search"
        className="pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-200 h-12"
      />
    </div>
  );
};

export default Searchbar;
