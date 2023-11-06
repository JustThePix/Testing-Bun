import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  child: React.ReactNode;
  href: string;
  classExtend?: string;
};

export default function ButtonLink({ child, classExtend, href, ...rest }: ButtonProps) {
  return (
    <Link
      {...rest}
      to={href}
      className={`rounded-full bg-blue-500 p-2 px-4 font-bold text-white focus:outline-none ${classExtend}`}
    >
      {child}
    </Link>
  );
}
