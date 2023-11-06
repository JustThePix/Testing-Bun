import React from "react";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  child: React.ReactNode;
  href: string;
  classExtend?: string;
};

export default function ButtonLink({ child, classExtend, href, ...rest }: ButtonProps) {
  return (
    <a
      {...rest}
      href={href}
      className={`rounded-full bg-blue-500 p-2 px-4 font-bold text-white focus:outline-none ${classExtend}`}
    >
      {child}
    </a>
  );
}
