import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import client from "./supabase/client";
React;

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    client.auth.signUp({ email: data.email, password: data.password, options: { data: { name: data.name } } });

    toast.success("Successfully sing up, go to your gmail for confirm your sing up", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const onErrors: SubmitErrorHandler<Inputs> = (errors) => {
    if (errors.name) toast.error("Put your name", { hideProgressBar: true, position: "bottom-center" });
    else if (errors.email) toast.error("Invalid email", { hideProgressBar: true, position: "bottom-center" });
    else if (errors.password)
      toast.error("The minimum lenght are 8", { hideProgressBar: true, position: "bottom-center" });
  };

  return (
    <>
      <Navbar />
      <main className="flex h-screen w-full items-center justify-center">
        <ToastContainer limit={3} />
        <form className="w-1/2 max-md:w-[80%]" noValidate onSubmit={handleSubmit(onSubmit, onErrors)}>
          <h2 className="text-xl font-bold">Register</h2>
          <div className="my-2">
            <input type="text" placeholder="Name" className="input-primary" {...register("name", { required: true })} />
            <input
              type="email"
              placeholder="Email"
              className="input-primary my-1"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-primary"
              {...register("password", { required: true, minLength: 8 })}
            />
          </div>
          <Button type="submit" child="Submit" />
        </form>
      </main>
    </>
  );
}
