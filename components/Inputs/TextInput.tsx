import { ErrorMessage, Field } from "formik";
import React from "react";
import { TextInputProps } from "../../types/TextInput";

const TextInput = (props: TextInputProps) => {
  return (
    <>
      <label className="font-bold mb-1 dark:text-gray-200" htmlFor={props.name}>
        {props.label}
      </label>
      <Field
        className="bg-white dark:border-none dark:bg-gray-700 dark:text-gray-200 border px-3 py-3 rounded-md text-xs focus:border-br-blue outline-none"
        id={props.name}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
      <div className="text-red-500 mt-1">
        <ErrorMessage name={props.name} />
      </div>
    </>
  );
};

export default TextInput;
