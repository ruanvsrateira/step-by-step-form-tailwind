import { InputHTMLAttributes } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  name: string;
  value: string | boolean;
  error: string | undefined;
  placeholder: string;
  type: "input" | "checkbox";
}

export const Input = ({ error, ...props }: InputProps) => {
  if (props.type == "checkbox") {
    return (
      <div className="mb-4">
        <div className="flex gap-2">
          <input {...props} checked={props.value as boolean} value={""} />
          <p className="text-gray-600">{props.placeholder}</p>
        </div>
        {error && <span className="text-gray-600 italic">({error})</span>}
      </div>
    );
  }

  return (
    <div className="w-full">
      <input
        className="w-full border-2 h-12 px-2 rounded-md border-gray-400 placeholder:text-gray-400 hover:border-gray-500 transition-colors text-gray-600"
        {...props}
        value={props.value as string}
      />
      {error && <span className="text-red-500 ">{error}</span>}
    </div>
  );
};
