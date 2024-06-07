import { cn } from "@/utils"
import { ReactNode } from "react"

interface HomeCardProps {
  title?: string
  children: ReactNode
  className?: string 
}

function HomeCard({ children, title, className }: HomeCardProps){
  return (
    <div className={cn("bg-white border border-brand-200 rounded-md p-2", className)}>
      <div className="w-full"> 
        <h3 className="text-md font-medium text-brand-600">{title}</h3>
      </div>
      <div className="py-2">
        {children}
      </div>
    </div>
  )
}

export default HomeCard