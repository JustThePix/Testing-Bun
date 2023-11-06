import React from "react";
import Link from "./Link";
React;

type Route = {
  name: string;
  link: string;
};

export default function Navbar() {
  const routes: Route[] = [
    {
      name: "Welcome",
      link: "/",
    },
    {
      name: "Register",
      link: "/register",
    },
    {
      name: "Login",
      link: "/login",
    },
  ];

  return (
    <nav className="justify-center px-4 py-2 max-md:flex">
      {routes.map((route) => (
        <Link
          href={route.link}
          child={route.name}
          key="route"
        />
      ))}
    </nav>
  );
}
