'use client'
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDropdown() {
  return (
    <Select className='rounded-2xl w-full '>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="category1">Select Category</SelectItem>
          <SelectItem value="category2">Select Category</SelectItem>
          <SelectItem value="category3">Select Category</SelectItem>
          <SelectItem value="category4">Select Category</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
