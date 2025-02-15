"use client";

import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };
  return (
    <div className="max-w-full min-h-screen w-full flex justify-center bg-primary pb-10 p-40 font-inter">
      <div className="bg-tertiary flex flex-col max-w-full max-h-fit px-10 py-20 rounded-2xl shadow-lg w-full">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-tertiary absolute top-24 text-black p-4 rounded-full shadow-sm">
            <img src="/logo.png" alt="logo" className="" />
          </div>
        </div>

        <h2 className="text-center text-3xl font-semibold text-primary mb-4 font-inter">
          Welcome back!
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="text-secondary font-normal text-lg font-inter">
              User Name
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-quatanery rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-secondary flex justify-between items-center font-normal text-lg font-inter">
              Password
              <Link
                href="/forgotpassword"
                className="text-lg text-primary font-medium float-right mt-1"
              >
                Forgot your password?
              </Link>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border-quatanery border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? "" : ""}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 p-2 accent-primary"
            />
            <label className="ml-1 text-primary">Remember me</label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary text-tertiary py-3 px-6 rounded-full hover:bg-tertiary hover:text-primary hover:border-primary border transition cursor-pointer"
          >
            Log in
          </button>

          {/* Signup Link */}
          <p className="text-center text-secondary text-base mt-3">
            Don’t have an account?{" "}
            <Link href="/createaccount" className="text-primary font-medium">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
