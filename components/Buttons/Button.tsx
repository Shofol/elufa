import React from "react";
import { ButtonProps } from "../../types/Button";
import Image from "next/image";
import classNames from "classnames";

const Button = (props: ButtonProps) => {
  var btnClass = classNames(
    "text-white text-xs rounded-sm",
    props.additionalClasses ? props.additionalClasses : "",
    {
      "bg-br-blue px-6 py-2 w-full lg:w-auto": props.buttonType === "primary",
    }
  );

  return (
    <button
      type={props.type}
      className={btnClass}
      onClick={(e) => props.action}
    >
      {props.buttonText}
      {props.icon && (
        <Image
          src={props.icon.src}
          width={props.icon.width}
          height={props.icon.height}
          alt={props.icon.alt}
        />
      )}
    </button>
  );
};

export default Button;
