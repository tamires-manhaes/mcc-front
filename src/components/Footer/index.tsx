'use client'

import { FunctionComponent } from "react"

export const Footer: FunctionComponent = () => {
  return (
    <footer className="footer">
      <p>&copy; 2022 - {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  )
}