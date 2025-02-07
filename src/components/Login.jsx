import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { authService } from "../appwrite/auth";
import { set, useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex item-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-100 border border-black/10">
      <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
          <Logo width="100%" />
        </span>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-base text-black/60">
        Don&apos;t have any account?&nbsp;
        <Link
          to="/signup"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign Up
        </Link>
      </p>
      {error &&  <p className="text-red-500 text-center mp-8">{error}</p>}
      <form onSubmit={handleSubmit(login)} className="mt-8">
        <div className="space-y-5">
            <Input
            label="Email:"
            placeholder="Enter your email"
            type="email"
            {...register("email", { 
                required: true,
                validate: {
                    matchPattern: (value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                }
             })} 
            />
            <Input
            label="Password"
            type="password"
            placeholder="Enter your Password"
            {...register("password",{
                required:true,
            })}
            />
            <Button
            type="submit"
            className="w-full"
            >Press Me</Button>
        </div>
      </form>
    </div>
</div>

  );
};

export default Login;


// handleSubmit is a method we are getting from useFOrm hook. It is used to submit the form. It takes a callback function as an argument. This callback function is called when the form is submitted. In this case, we are calling the login function when the form is submitted.
// regisster mein email as a key jata h tou jo data object aata h usmein email  ek  key hoti h


// regexp