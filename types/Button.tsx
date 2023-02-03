export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  icon?: React.ReactElement;
  buttonText?: string;
  action?: Function;
}
