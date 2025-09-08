import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ModuleColor, ColorClasses } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function getModuleColors(color: ModuleColor, colorClasses: Record<ModuleColor, ColorClasses>): ColorClasses {
  // Runtime check to ensure the color exists
  if (color in colorClasses) {
    return colorClasses[color];
  }
  
  // Fallback to blue if color is not found (this shouldn't happen with proper typing)
  console.warn(`Color "${color}" not found in colorClasses, falling back to blue`);
  return colorClasses.blue;
}

export function isValidModuleColor(color: string): color is ModuleColor {
  return ['blue', 'green', 'purple', 'orange', 'teal', 'indigo'].includes(color);
}


