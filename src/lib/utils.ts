import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function createFormData(data: Record<string, string | File>): FormData {
  const formData = new FormData();
  for (const key in data) {
    if (key !== 'image') {
      formData.append(key, data[key]);
    }
  };
  return formData;
}