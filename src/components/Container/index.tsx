'use client'

import { cn } from "@/utils/cn";
import { ReactNode, useContext } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps){

  return (
    <div className={cn("relative flex min-h-[90vh] flex-col items-center justify-center p-4 bg-brand-50", className)}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}