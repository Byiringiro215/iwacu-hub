import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, ...props }, ref) => {
    return (
      <fieldset
        className={cn(
          "relative w-full rounded-md border border-gray-300 px-3 py-1",
          
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
      >
        <legend className="px-1 text-sm ">{label}</legend>
        <input
          ref={ref}
          type={type}
          className="w-full focus:outline-none py-1 text-[#424242] placeholder:text-[#757575]"
          {...props}
        />
      </fieldset>
    );
  }
);

Input.displayName = "Input";

export { Input };
