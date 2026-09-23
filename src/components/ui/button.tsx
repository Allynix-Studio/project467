import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-technical inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-[11px] font-medium uppercase cursor-pointer transition-[color,background-color,border-color,transform] duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border border-primary bg-primary text-primary-foreground hover:bg-primary/85 active:translate-y-px",
        destructive: "border border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/85",
        outline:
          "border border-border bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
        secondary: "border border-border bg-secondary text-secondary-foreground hover:border-muted-foreground",
        ghost: "text-muted-foreground hover:bg-secondary hover:text-foreground",
        link: "text-foreground underline-offset-8 hover:text-primary hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4 text-[10px]",
        lg: "h-13 px-8 text-xs",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
