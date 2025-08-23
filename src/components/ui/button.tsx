import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: 
          "bg-primary text-primary-foreground shadow-medium hover:bg-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground shadow-medium hover:bg-destructive/90",
        outline:
          "border-2 border-primary bg-background text-primary shadow-subtle hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-subtle hover:bg-secondary/80 border border-border",
        ghost: 
          "hover:bg-secondary hover:text-secondary-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline hover:text-primary-hover",
        hero: 
          "bg-primary text-primary-foreground shadow-medium hover:bg-primary-hover",
        premium: 
          "bg-accent text-accent-foreground shadow-medium hover:bg-accent-hover"
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
