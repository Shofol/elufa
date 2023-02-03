import React from "react";
import { ButtonProps } from "../../types/Button";

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className="bg-br-blue text-white text-xs w-full lg:w-auto px-6 py-2 rounded-sm"
      onClick={(e) => props.action}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
