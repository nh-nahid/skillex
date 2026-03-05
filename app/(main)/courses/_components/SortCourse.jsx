"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SORT_OPTIONS = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

const SortCourse = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-white/5 backdrop-blur-md border border-white/10 text-white focus:ring-0 focus:ring-offset-0 overflow-hidden rounded-xl">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>

      <SelectContent className="bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-xl">
        <SelectGroup>
          <SelectLabel className="text-white/70">Sort Options</SelectLabel>
          {SORT_OPTIONS.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="text-white hover:bg-indigo-500/20"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortCourse;