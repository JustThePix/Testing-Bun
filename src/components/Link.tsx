import React from "react";
import { Link } from "react-router-dom";

type LinkProps = React.LinkHTMLAttributes<HTMLLinkElement> & {
  child: React.ReactNode;
  href: string;
}

export default function AnimatedLink({ child, href }: LinkProps) {
  return (
    <Link
      className="link link-underline link-underline-black mr-2 pb-1 font-bold text-black"
      to={href}
    >
      {child}
    </Link>
  );
}
