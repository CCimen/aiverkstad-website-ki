import React from "react"
import { cn } from "@/lib/utils"
import { AlertCircle } from "lucide-react"

export interface NordicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  helperText?: string
}

const NordicInput = React.forwardRef<HTMLInputElement, NordicInputProps>(
  ({ className, type = "text", label, error, helperText, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "peer w-full px-4 py-3 pt-6 bg-nordic-frost border-2 rounded-lg text-nordic-ink placeholder-transparent transition-all duration-200 focus:bg-nordic-snow focus:outline-none",
            error
              ? "border-nordic-error focus:border-nordic-error focus:shadow-[0_0_0_4px_rgba(197,48,48,0.1)]"
              : "border-nordic-cloud focus:border-nordic-forest focus:shadow-[0_0_0_4px_rgba(27,67,50,0.1)]",
            className
          )}
          placeholder={label}
          ref={ref}
          {...props}
        />
        <label
          className={cn(
            "absolute left-4 top-2 text-xs transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs",
            error
              ? "text-nordic-error"
              : "text-nordic-steel peer-focus:text-nordic-forest"
          )}
        >
          {label}
        </label>
        {error && (
          <div className="mt-1 text-sm text-nordic-error flex items-center">
            <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
        {helperText && !error && (
          <div className="mt-1 text-sm text-nordic-steel">
            {helperText}
          </div>
        )}
      </div>
    )
  }
)
NordicInput.displayName = "NordicInput"

export { NordicInput }