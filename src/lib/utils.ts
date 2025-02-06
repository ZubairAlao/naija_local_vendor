import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export const generateUsername = (fullName: string) => {
  const firstName = fullName.split(" ")[0]; // Extract first name
  const randomString = Math.random().toString(36).substring(2, 6); // Generate 4 random alphanumeric characters
  return `${firstName}${randomString}`.toLowerCase(); // Combine and return
};


