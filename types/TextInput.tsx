import { FormikTouched, FormikErrors } from "formik";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  label: string;
}
