import React from "react";
import ButtonLink from "./components/ButtonLink";
import Navbar from "./components/Navbar";
import client from "./supabase/client";
import { Navigate } from "react-router-dom";
React;

const {
  data: { session },
} = await client.auth.getSession();

function Welcome() {
  if (session != null) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <Navbar />
      <main className="flex h-screen w-full flex-col items-center justify-center">
        <h1 className="max-w-[80%] text-center text-2xl font-bold">
          Welcome to my Task App
        </h1>
        <ButtonLink href="/register" classExtend="mt-2" child="Get started" />
      </main>
    </>
  );
}

export default Welcome;
