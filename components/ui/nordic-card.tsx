import React from "react"
import { cn } from "@/lib/utils"

interface NordicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  children: React.ReactNode
}

const NordicCard = React.forwardRef<HTMLDivElement, NordicCardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative bg-nordic-snow rounded-xl border border-nordic-cloud shadow-sm transition-all duration-300 ease-out overflow-hidden",
          hover && "hover:shadow-xl hover:border-nordic-sage hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {hover && (
          <div className="absolute inset-0 bg-gradient-to-br from-nordic-mint/0 to-nordic-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        <div className="relative p-6">
          {children}
        </div>
      </div>
    )
  }
)
NordicCard.displayName = "NordicCard"

const NordicCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 pb-4", className)}
      {...props}
    />
  )
)
NordicCardHeader.displayName = "NordicCardHeader"

const NordicCardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-h3 text-nordic-ink leading-none tracking-tight", className)}
      {...props}
    />
  )
)
NordicCardTitle.displayName = "NordicCardTitle"

const NordicCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-nordic-steel", className)}
      {...props}
    />
  )
)
NordicCardDescription.displayName = "NordicCardDescription"

const NordicCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
)
NordicCardContent.displayName = "NordicCardContent"

export {
  NordicCard,
  NordicCardHeader,
  NordicCardTitle,
  NordicCardDescription,
  NordicCardContent,
}