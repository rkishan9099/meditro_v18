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


export  const addCanonical = (url) => {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', url);  
  }else{
    const newCanonical = document.createElement('link');
    newCanonical.setAttribute('rel', 'canonical');
    newCanonical.setAttribute('href', url);
    document.head.appendChild(newCanonical);
  }
}