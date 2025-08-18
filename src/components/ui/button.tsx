import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: 
          "bg-primary text-primary-foreground shadow-medium hover:bg-primary-glow hover:shadow-strong hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground shadow-medium hover:bg-destructive/90 hover:shadow-strong hover:-translate-y-0.5",
        outline:
          "border-2 border-primary bg-background text-primary shadow-subtle hover:bg-primary hover:text-primary-foreground hover:shadow-medium hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground shadow-subtle hover:bg-secondary/80 border border-border hover:shadow-medium hover:-translate-y-0.5",
        ghost: 
          "hover:bg-secondary hover:text-secondary-foreground hover:-translate-y-0.5",
        link: 
          "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        hero: 
          "bg-gradient-primary text-primary-foreground shadow-strong hover:shadow-glow hover:scale-105",
        premium: 
          "bg-accent text-accent-foreground shadow-strong hover:bg-accent-glow hover:shadow-glow hover:scale-105"
      },
      size: {
        default: "h-11 px-6 py-2 text-base min-w-[120px]",
        sm: "h-9 rounded-md px-4 text-sm min-w-[100px]",
        lg: "h-14 rounded-lg px-8 text-lg min-w-[140px]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
