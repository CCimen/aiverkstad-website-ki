import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const nordicButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 disabled:transform-none disabled:shadow-none",
  {
    variants: {
      variant: {
        primary: "bg-nordic-forest text-white hover:bg-nordic-forest-dark shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus-visible:ring-nordic-forest/20",
        secondary: "border-2 border-nordic-forest text-nordic-forest hover:bg-nordic-forest hover:text-white shadow-sm hover:shadow-md focus-visible:ring-nordic-forest/20",
        tertiary: "text-nordic-forest hover:text-nordic-forest-dark hover:bg-nordic-mint/30 focus-visible:ring-nordic-forest/20",
        outline: "border border-nordic-cloud text-nordic-ink hover:bg-nordic-frost focus-visible:ring-nordic-forest/20",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        default: "h-11 px-6 py-3",
        lg: "h-12 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface NordicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof nordicButtonVariants> {
  asChild?: boolean
  loading?: boolean
}

const NordicButton = React.forwardRef<HTMLButtonElement, NordicButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(nordicButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Bearbetar...
          </>
        ) : children}
      </Comp>
    )
  }
)
NordicButton.displayName = "NordicButton"

export { NordicButton, nordicButtonVariants }