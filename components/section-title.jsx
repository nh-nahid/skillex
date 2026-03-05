import { cn } from "@/lib/utils";

export const SectionTitle = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "text-2xl md:text-3xl lg:text-4xl font-bold text-white",
        className
      )}
    >
      {children}
    </h2>
  );
};