import React from "react";
import { Link } from "react-router-dom";

type LinkProps = React.LinkHTMLAttributes<HTMLLinkElement> & {
  child: React.ReactNode;
  classExtend?: string;
  href: string;
}

export default function AnimatedLink({ child, classExtend, href }: LinkProps) {
  return (
    <Link
      className={`link link-underline link-underline-black pb-1 font-bold text-black ${classExtend}`}
      to={href}
    >
      {child}
    </Link>
  );
}
