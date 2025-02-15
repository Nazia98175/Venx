"use client";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [input, setInput] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Simulate OTP send
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setOtpSent(true);
    }
  };
  return (
    <div className="max-w-full min-h-screen w-full flex justify-center bg-primary pb-10 p-40 font-inter">
      <div className="bg-tertiary flex flex-col max-h-fit px-24 py-20 rounded-2xl shadow-lg w-full">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-tertiary absolute top-24 text-black p-4 rounded-full shadow-sm">
            <img src="/logo.png" alt="logo" className="" />
          </div>
        </div>

        <h2 className="text-center text-3xl font-semibold text-primary mb-4 font-inter">
          Forgot Password
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="text-secondary font-normal text-lg font-inter">
              Email ID / Mobile Number
            </label>
            <input
              type="text"
              name="username"
              value={input}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          {otpSent && (
            <p className="text-gray-500 text-sm">
              OTP sent to XXXXXX{input.slice(-4)}
            </p>
          )}
          {/* Password */}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-full hover:bg-tertiary hover:text-primary hover:border-primary border transition cursor-pointer"
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
