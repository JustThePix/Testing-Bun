import React from "react";
import Link from "./Link";
import client from "../supabase/client";
React;

type Route = {
  name: string;
  link: string;
};

const {
  data: { session },
} = await client.auth.getSession();

export default function Navbar() {
  let routes: Route[] = [];
  console.log(session);

  if (session == null) {
    routes = [
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
  } else {
    routes = [
      {
        name: "Home",
        link: "/home",
      },
      {
        name: "Create",
        link: "/tasks/add",
      },
      {
        name: "Update",
        link: "/tasks/update",
      },
      {
        name: "Delete",
        link: "/tasks/Delete",
      },
    ];
  }

  return (
    <nav className="fixed w-full items-center justify-around px-4 py-2 max-sm:flex">
      {routes.map((route) => (
        <Link href={route.link} child={route.name} classExtend="sm:mr-4 text-center" key={route.link} />
      ))}
    </nav>
  );
}
