import React from "react";
import ButtonLink from "./components/ButtonLink";
React;

function App() {
  return (
    <>
      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="max-w-[80%] text-center text-xl font-bold">Welcome to my Task App</h1>
        <ButtonLink href="#" classExtend="mt-2" child="Get started" />
      </main>
    </>
  );
}

export default App;
