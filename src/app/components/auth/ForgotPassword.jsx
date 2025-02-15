"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ForgotPassword = () => {
  const router = useRouter();
  const [input, setInput] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Simulate OTP send
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`OTP sent to XXXXXX${input.slice(-4)}`);
    router.push("/otp");
  };
  return (
    <div className="max-w-full min-h-screen w-full flex justify-center max-h-fit bg-primary pb- lg:pb-10 p-5 lg:p-40 font-inter">
      <div className="bg-white flex flex-col max-w-full px-2 lg:px-10 py-10 lg:py-20 justify-center rounded-2xl shadow-lg w-full">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-white absolute -bottom-3 lg:top-24 lg:bottom-auto text-black p-4 rounded-full shadow-sm">
            <img src="/logo.png" alt="logo" className="" />
          </div>
        </div>

        <h2 className="text-center text-2xl lg:text-3xl font-semibold text-primary mb-4 font-inter">
          Forgot Password
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="text-secondary font-normal text-base lg:text-lg font-inter">
              Email ID / Mobile Number
            </label>
            <input
              type="text"
              name="username"
              value={input}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-full hover:bg-white hover:text-primary hover:border-primary border transition cursor-pointer"
          >
            Submit
          </button>

          {/* Signup Link */}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
