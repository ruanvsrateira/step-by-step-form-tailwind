import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  variant: "purple" | "green";
}

export const Button = ({
  text,
  leftIcon,
  rightIcon,
  variant = "purple",
  ...props
}: ButtonProps) => {
  if (variant == "purple") {
    return (
      <button
        className="w-full h-12 flex items-center justify-center gap-2 px-2 rounded-md text-white placeholder:text-purple-400 bg-purple-400 hover:bg-purple-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        {...props}
      >
        {leftIcon && leftIcon} {text} {rightIcon && rightIcon}
      </button>
    );
  }

  if (variant == "green") {
    return (
      <button
        className="w-full h-12 flex items-center justify-center gap-2 px-2 rounded-md text-white placeholder:text-purple-400 bg-green-400 hover:bg-green-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        {...props}
      >
        {leftIcon && leftIcon} {text} {rightIcon && rightIcon}
      </button>
    );
  }
};
