import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  child: React.ReactNode;
  classExtend?: string;
};

export default function Button({ child, classExtend, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`rounded-full bg-blue-500 p-2 px-4 font-bold text-white focus:outline-none ${classExtend}`}
    >
      {child}
    </button>
  );
}
