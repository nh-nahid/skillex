"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ActiveFilters = ({ filter, applyArrayFilter }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {filter.categories.map((category) => (
        <Button
          key={category}
          variant="ghost"
          className="text-xs h-7 rounded-full gap-1 bg-white/5 text-indigo-200 backdrop-blur-md border border-white/10 hover:bg-indigo-500/20 hover:text-white hover:scale-105 transition-transform"
          onClick={() => applyArrayFilter({ type: "categories", value: category })}
        >
          {category} <X className="w-3" />
        </Button>
      ))}

      {filter.price.map((price) => (
        <Button
          key={price}
          variant="ghost"
          className="text-xs h-7 rounded-full gap-1 bg-white/5 text-indigo-200 backdrop-blur-md border border-white/10 hover:bg-indigo-500/20 hover:text-white hover:scale-105 transition-transform"
          onClick={() => applyArrayFilter({ type: "price", value: price })}
        >
          {price} <X className="w-3" />
        </Button>
      ))}
    </div>
  );
};

export default ActiveFilters;