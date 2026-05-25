import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-sans font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gold text-navy hover:bg-gold-bright hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(201,168,76,0.35)]",
        secondary: "bg-transparent border-[1.5px] border-gold text-gold hover:bg-gold/10",
        ghost: "bg-transparent border border-white text-white hover:bg-white hover:text-navy",
        outline: "bg-transparent border border-white text-white hover:bg-white/10",
        link: "text-trustBlue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-auto rounded-lg px-7 py-3.5 text-[16px] tracking-[0.3px]",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-auto rounded-xl px-10 py-4 text-lg",
        icon: "h-12 w-12 rounded-lg",
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