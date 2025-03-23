import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function saveToStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export async function loadFromStorage(name) {
  const storageString = localStorage.getItem(name);
  return storageString ? JSON.parse(storageString) : undefined;
}
