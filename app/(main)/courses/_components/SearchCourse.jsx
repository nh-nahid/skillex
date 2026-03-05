"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchCourse = ({ className, placeholder = "Search courses..." }) => {
  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 z-10 h-4 w-4" />
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-10 pr-3 py-2 text-sm bg-white/5 backdrop-blur-md border border-white/10 focus:border-indigo-400 focus:ring-0 text-white placeholder-white/60 transition-all duration-200 rounded-xl"
      />
    </div>
  );
};

export default SearchCourse;