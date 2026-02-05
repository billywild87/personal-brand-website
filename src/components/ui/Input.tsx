"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  forwardRef,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type ReactNode,
} from "react";

// INPUT COMPONENT

const inputVariants = cva(
  [
    "w-full bg-zinc-800/30 text-zinc-100 placeholder:text-zinc-500",
    "border border-zinc-700/60 rounded-lg",
    "transition-all duration-300",
    "focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-4 text-base",
      },
      variant: {
        default: "",
        error: "border-red-500/50 focus:border-red-500 focus:ring-red-500/20",
        success:
          "border-emerald-500/50 focus:border-emerald-500 focus:ring-emerald-500/20",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, size, variant, leftIcon, rightIcon, error, type, ...props },
    ref
  ) => {
    const hasLeftIcon = Boolean(leftIcon);
    const hasRightIcon = Boolean(rightIcon);

    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(
            inputVariants({ size, variant: error ? "error" : variant }),
            hasLeftIcon && "pl-10",
            hasRightIcon && "pr-10",
            className
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
            {rightIcon}
          </div>
        )}
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

// TEXTAREA COMPONENT

const textareaVariants = cva(
  [
    "w-full bg-zinc-800/30 text-zinc-100 placeholder:text-zinc-500",
    "border border-zinc-700/60 rounded-lg",
    "transition-all duration-300",
    "focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "resize-none",
  ],
  {
    variants: {
      size: {
        sm: "p-3 text-sm min-h-[80px]",
        md: "p-4 text-sm min-h-[120px]",
        lg: "p-4 text-base min-h-[160px]",
      },
      variant: {
        default: "",
        error: "border-red-500/50 focus:border-red-500 focus:ring-red-500/20",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, variant, error, ...props }, ref) => {
    return (
      <div>
        <textarea
          ref={ref}
          className={cn(
            textareaVariants({ size, variant: error ? "error" : variant }),
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

// FORM FIELD COMPONENT (Label + Input wrapper)

export interface FormFieldProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { label, htmlFor, required, error, hint, children, className, ...props },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium text-zinc-300"
        >
          {label}
          {required && <span className="ml-1 text-red-400">*</span>}
        </label>
        {children}
        {hint && !error && (
          <p className="text-xs text-zinc-500">{hint}</p>
        )}
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

FormField.displayName = "FormField";

// CHECKBOX COMPONENT

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={cn(
            "h-4 w-4 rounded border-zinc-700 bg-zinc-800/30",
            "text-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:ring-offset-0",
            "transition-colors cursor-pointer",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="text-sm text-zinc-300 cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

// SELECT COMPONENT

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<InputHTMLAttributes<HTMLSelectElement>, "size"> {
  options: SelectOption[];
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, options, placeholder, size = "md", error, ...props },
    ref
  ) => {
    const sizeClasses = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-4 text-base",
    };

    return (
      <div>
        <select
          ref={ref}
          className={cn(
            "w-full bg-zinc-800/30 text-zinc-100",
            "border border-zinc-700/60 rounded-lg",
            "transition-all duration-300",
            "focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "cursor-pointer appearance-none",
            "bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23a1a1aa%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]",
            "bg-[length:20px] bg-[right_12px_center] bg-no-repeat",
            "pr-10",
            sizeClasses[size],
            error && "border-red-500/50",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export { inputVariants, textareaVariants };
