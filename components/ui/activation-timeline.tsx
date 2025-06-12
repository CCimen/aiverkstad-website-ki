"use client"

import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineStep {
  id: string
  title: string
  status: 'completed' | 'current' | 'pending'
}

interface ActivationTimelineProps {
  currentStep: number
}

export function ActivationTimeline({ currentStep }: ActivationTimelineProps) {
  const steps: TimelineStep[] = [
    {
      id: "contact",
      title: "Kontaktuppgifter",
      status: currentStep > 1 ? 'completed' : currentStep === 1 ? 'current' : 'pending'
    },
    {
      id: "confirmation",
      title: "Bekräftelse",
      status: currentStep > 2 ? 'completed' : currentStep === 2 ? 'current' : 'pending'
    },
    {
      id: "complete",
      title: "Klart",
      status: currentStep > 3 ? 'completed' : currentStep === 3 ? 'current' : 'pending'
    }
  ]

  return (
    <div className="w-full max-w-2xl mx-auto mb-6 px-4">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-3 left-6 right-6 h-px bg-nordic-cloud">
          <div
            className="h-full bg-nordic-sage transition-all duration-500 ease-out"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`
            }}
          />
        </div>

        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative z-10 flex-1 min-w-0">
            {/* Step indicator */}
            {step.status === 'completed' || (step.status === 'current' && index === 2) ? (
              <CheckCircle className="w-6 h-6 text-nordic-sage fill-nordic-sage" />
            ) : step.status === 'current' ? (
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-nordic-sage border-nordic-sage text-white text-xs font-bold">
                <span>{index + 1}</span>
              </div>
            ) : (
              <div className="flex items-center justify-center w-6 h-6 rounded-full border bg-nordic-snow border-nordic-cloud text-nordic-steel text-xs font-bold">
                <span>{index + 1}</span>
              </div>
            )}

            {/* Step title */}
            <div className="mt-2 text-center px-1">
              <h3 className={cn(
                "font-medium text-xs transition-colors leading-tight break-words",
                {
                  "text-nordic-sage": step.status === 'completed' || step.status === 'current',
                  "text-nordic-steel": step.status === 'pending'
                }
              )}>
                {step.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
