import { type ComponentProps } from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends ComponentProps<"a"> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-sm",
  outline:
    "border border-border text-text-primary hover:border-accent hover:text-accent",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
