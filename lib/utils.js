import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function saveToStorage(name, data) {
  // Save contents to local storage. You might want to debounce this or replace
  // with a call to your API / database.
  localStorage.setItem(name, JSON.stringify(data));
}

export async function loadFromStorage(name) {
  // Gets the previously stored editor contents.
  const storageString = localStorage.getItem(name);
  return storageString ? JSON.parse(storageString) : undefined;
}
