import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  error: string | undefined;
  placeholder: string;
}

export const Input = ({ error, ...props }: InputProps) => {
  return (
    <div className="w-full">
      <input
        className="w-full border-2 h-12 px-2 rounded-md border-purple-400 placeholder:text-purple-400 hover:border-purple-600 transition-colors text-gray-600"
        {...props}
      />
      {error && <span className="text-gray-600 italic">({error})</span>}
    </div>
  );
};
