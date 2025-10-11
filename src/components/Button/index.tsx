import React from "react";
import styles from './button.module.css'
import classNames from "classnames";

interface ButtonNavBar extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "icon" | "default";
  isSelected ?: boolean; 
}

const Button = ({ children, variant,isSelected, className = "", ...rest }: ButtonNavBar) => {

  
  const baseClasses = "inline-flex items-center justify-center rounded-xl transition-all ";

  const btn = {
    "default" : styles.buttonStart,
    "icon" : ""
  }
  
  const variantClasses =
    variant === "icon"
      ? "p-2 w-auto h-auto" 
      : "px-4 py-2 "; 

  const buttonSelected = isSelected ? "text-[white] bg-[#374151] " : ""
  
  return (
    <button
      {...rest}
      className={`${baseClasses} ${variantClasses} ${btn[variant]} hover:bg-[#374151]   text-[#A0A0A0] ${buttonSelected} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
