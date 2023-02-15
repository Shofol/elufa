import React from "react";
import { ButtonProps } from "../../types/Button";
import Image from "next/image";
import classNames from "classnames";

const Button = (props: ButtonProps) => {
  var btnClass = classNames(
    "text-white text-xs rounded-sm hover:opacity-80 duration-100 flex items-center",
    props.additionalClasses ? props.additionalClasses : "",
    {
      "bg-br-blue px-6 py-2 w-full lg:w-auto": props.buttonType === "primary",
    }
  );

  return (
    <button type={props.type} className={btnClass} onClick={props.action}>
      {props.icon && (
        <Image
          src={props.icon.src}
          width={props.icon.width}
          height={props.icon.height}
          alt={props.icon.alt}
          className={props.icon.class}
        />
      )}
      {props.buttonText}
    </button>
  );
};

export default Button;
