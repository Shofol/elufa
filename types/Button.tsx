declare type SafeNumber = number | `${number}`;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  icon?: IconProps;
  buttonText?: string;
  action?: any;
  buttonType?: string;
  additionalClasses?: string;
}

export interface IconProps {
  src: string;
  alt: string;
  width: SafeNumber | undefined;
  height: SafeNumber | undefined;
  class?: string;
}
