"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/utils"
import { Button } from "../Button"
import { Calendar } from "../Calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../Popover"

export function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"text"}
          classNames={cn(
            "w-[280px] flex justify-start items-center text-left font-normal border-brand-300",
            !date && "text-muted-foreground"
          )}
          onClick={() => console.log('abrir date picker')}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
