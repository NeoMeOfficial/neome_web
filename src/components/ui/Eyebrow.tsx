import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}

export const Eyebrow = ({ children, onDark = false, className }: EyebrowProps) => (
  <p className={cn("eyebrow", onDark && "eyebrow--on-dark", className)}>
    {children}
  </p>
);
