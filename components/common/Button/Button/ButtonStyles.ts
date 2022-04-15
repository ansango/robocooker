/**
 *? Button Styles
 */

export enum size {
  xsmall = "py-2 px-3 text-xs font-medium",
  small = "py-2 px-3 text-sm font-medium",
  base = "py-2.5 px-5 text-sm font-medium",
  large = "py-3 px-5 text-base font-medium",
  xlarge = "py-3.5 px-6 text-base font-medium",
}

export const fullWidth = "w-full !justify-center";

export enum solid {
  default = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-center",
  alternative = "text-gray-900 bg-gray-100 border border-gray-200 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700",
  dark = "text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 text-center",
  light = "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 text-center",
  green = "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-center",
  red = "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300  text-center",
  yellow = "text-yellow-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 text-center",
  purple = "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 text-center",
}

export enum rounded {
  default = "rounded-lg",
  pill = "rounded-full",
}

export enum outline {
  default = "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-center",
  alternative = "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700",
  dark = "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 text-center",
  light = "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 text-center",
  green = "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-center",
  red = "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 text-center",
  yellow = "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 text-center",
  purple = "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 text-center",
}

export const disabled = "cursor-not-allowed opacity-50";
