import React from "react";
import { Loader } from "../loader";

export interface IButton {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
}

export function Button({
  children,
  disabled,
  loading,
  onClick,
  variant = "primary",
  className,
}: IButton) {
  function getVariantClassName() {
    const variantClasses = {
      primary: "bg-primary text-white font-semibold rounded",
      outline: "border border-solid border-primary text-primary rounded-[6px]",
    };
    return variantClasses[variant] ?? variantClasses.primary;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-[45px] px-2  flex items-center justify-center ${getVariantClassName()} ${className}`}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}
