/**
 *? Alert Styles
 */

export const alertBase = "flex items center p-4 mb-4 text-sm";

export enum alertBorderKind {
  info = "text-blue-700 bg-blue-100 border-t-4 border-blue-500",
  success = "text-green-700 bg-green-100 border-t-4 border-green-500",
  warning = "text-yellow-700 bg-yellow-100 border-t-4 border-yellow-500",
  danger = "text-red-700 bg-red-100 border-t-4 border-red-500",
  dark = "text-gray-700 bg-gray-100 border-t-4 border-gray-500",
}

export enum alertKind {
  info = "text-blue-700 bg-blue-100 rounded-lg",
  success = "text-green-700 bg-green-100 rounded-lg",
  warning = "text-yellow-700 bg-yellow-100 rounded-lg",
  danger = "text-red-700 bg-red-100 rounded-lg",
  dark = "text-gray-700 bg-gray-100 rounded-lg",
}

export const iconAlert = "flex-shrink-0 w-5 h-5 mr-3";

export const textBase = "text-sm font-medium";

export enum textKind {
  info = "text-blue-700",
  success = "text-green-700",
  warning = "text-orange-700",
  danger = "text-red-700",
  dark = "text-gray-700",
}

export const linkBase = "ml-2 font-semibold underline";

export enum linkKind {
  info = "hover:text-blue-800",
  danger = "hover:text-red-800",
  success = "hover:text-green-800",
  warning = "hover:text-yellow-800",
  dark = "hover:text-gray-800",
}

export const btnCloseBase =
  "ml-auto -mx-2.5 ml-1 -my-1.5 h-8 w-8 rounded-lg focus:ring-2 p-1.5 inline-flex";

export enum btnCloseKind {
  info = "bg-blue-100 text-blue-500 focus:ring-blue-400 hover:bg-blue-200",
  danger = "bg-red-100 text-red-500 focus:ring-red-400 hover:bg-red-200",
  success = "bg-green-100 text-green-500 focus:ring-green-400 hover:bg-green-200",
  warning = "bg-yellow-100 text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200",
  dark = "bg-gray-100 text-gray-500 focus:ring-gray-400 hover:bg-gray-200",
}

export const iconClose = "flex items-center justify-center";
