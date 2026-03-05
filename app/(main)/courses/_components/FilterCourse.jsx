"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const CATEGORY_OPTIONS = [
  { id: 1, label: "Design", value: "design" },
  { id: 2, label: "Development", value: "development" },
  { id: 3, label: "Marketing", value: "marketing" },
  { id: 4, label: "IT & Software", value: "it-software" },
  { id: 5, label: "Personal Development", value: "personal-development" },
  { id: 6, label: "Business", value: "business" },
  { id: 7, label: "Photography", value: "photography" },
  { id: 8, label: "Music", value: "music" },
];

const PRICE_OPTIONS = [
  { label: "Free", value: "free" },
  { label: "Paid", value: "paid" },
];

const FilterCourse = () => {
  const [filter, setFilter] = useState({
    categories: ["development"],
    price: ["free"],
    sort: "",
  });

  const applyArrayFilter = ({ type, value }) => {
    const isFilterApplied = filter[type].includes(value);
    setFilter((prev) => ({
      ...prev,
      [type]: isFilterApplied
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  return (
    <div className="hidden lg:block bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl">
      <Accordion defaultValue={["categories"]} type="multiple">
        <AccordionItem value="categories">
          <AccordionTrigger className="text-white/80 hover:text-indigo-300">
            Categories
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-3 mt-2">
              {CATEGORY_OPTIONS.map((option, idx) => (
                <li key={option.value} className="flex items-center">
                  <Checkbox
                    id={`category-${idx}`}
                    checked={filter.categories.includes(option.value)}
                    onCheckedChange={() =>
                      applyArrayFilter({ type: "categories", value: option.value })
                    }
                  />
                  <label
                    htmlFor={`category-${idx}`}
                    className="ml-3 text-sm text-white/70 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-white/80 hover:text-indigo-300">
            Price
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-3 mt-2">
              {PRICE_OPTIONS.map((option, idx) => (
                <li key={option.value} className="flex items-center">
                  <Checkbox
                    id={`price-${idx}`}
                    checked={filter.price.includes(option.value)}
                    onCheckedChange={() =>
                      applyArrayFilter({ type: "price", value: option.value })
                    }
                  />
                  <label
                    htmlFor={`price-${idx}`}
                    className="ml-3 text-sm text-white/70 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterCourse;