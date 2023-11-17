import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import client from "./supabase/client";
import { Navigate, redirect } from "react-router-dom";
React;

type Inputs = {
  title: string;
  description: string;
};

const {
  data: { user },
} = await client.auth.getUser();

export default function Create() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { error } = await client.from("tasks").insert({
      title: data.title,
      description: data.description,
      userid: user?.id,
    });

    if (error != null) {
      toast.error(error.message, {
        hideProgressBar: true,
        position: "bottom-center",
      });
    } else {
      window.location.href = "/home";
    }
  };
  const onError: SubmitErrorHandler<Inputs> = (error) => {
    if (error.title)
      toast.error("Title is required", {
        hideProgressBar: true,
        position: "bottom-center",
      });
    else if (error.description)
      toast.error("Description is required", {
        hideProgressBar: true,
        position: "bottom-center",
      });
  };

  if (user == null) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <main className="flex h-screen w-full items-center justify-center">
        <ToastContainer limit={3} />
        <form
          className="w-1/2 max-md:w-[80%]"
          noValidate
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <h2 className="text-xl font-bold">Add task</h2>
          <div className="my-2">
            <input
              type="text"
              placeholder="Title"
              className="input-primary my-1"
              {...register("title", { required: true })}
            />
            <textarea
              placeholder="Description"
              className="input-primary rounded-2xl"
              rows={5}
              style={{ resize: "none" }}
              {...register("description", { required: true })}
            />
          </div>
          <Button type="submit" child="Submit" />
        </form>
      </main>
    </>
  );
}
