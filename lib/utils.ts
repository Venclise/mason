import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function genRandomNumber() {
     return Math.floor(Math.random() * 9) + 1;
}
