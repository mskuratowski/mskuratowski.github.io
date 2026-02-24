interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 ${
        hover
          ? "transition-all hover:border-accent/30 hover:shadow-md"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
