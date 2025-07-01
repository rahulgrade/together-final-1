import React from "react";

export function Button({ children, variant = "default", className = "", ...props }) {
  const base = "px-4 py-2 rounded font-semibold";
  const styles = {
    default: "text-white",
    outline: "border border-black-600 text-black-600 hover:bg-black-50",
    ghost: "text-blue-600 hover:underline"
  };
  return (
    <button className={ `${base} ${styles[variant] || ""} ${className}` } { ...props }>
      { children }
    </button>
  );
}
