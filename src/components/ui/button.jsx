import React from "react";

export function Button({ children, variant = "default", className = "", ...props }) {
  const base = "px-4 py-2 rounded font-semibold";
  const styles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-blue-600 hover:underline"
  };
  return (
    <button className={`${base} ${styles[variant] || ""} ${className}`} {...props}>
      {children}
    </button>
  );
}
