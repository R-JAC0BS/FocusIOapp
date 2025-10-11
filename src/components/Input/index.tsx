import React, { type InputHTMLAttributes } from 'react';
import  styles from "./style.module.css"

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
    type : "text" | "checkbox" | "number",
    text ?: string
}


const Input = ({type,text,...rest} : InputType) => {

const typeButtonStyle: Record<InputType["type"], string> = {
    text: styles.text,
    checkbox: styles.checkbox,
    number: styles.number,
  };
  return (
    <input type={type} placeholder={text} className = {`${typeButtonStyle[type]} `} {...rest}  />
  );
};

export default Input;