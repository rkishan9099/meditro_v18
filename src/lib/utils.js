import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const updateMetaTag = (name, content) => {
  let metaTag = document.querySelector(`meta[name="${name}"]`);
  
  if (metaTag) {
    // Update existing meta tag
    metaTag.setAttribute("content", content);
  } else {
    // Create new meta tag if not found
    metaTag = document.createElement("meta");
    metaTag.setAttribute("name", name);
    metaTag.setAttribute("content", content);
    document.head.appendChild(metaTag);
  }
};