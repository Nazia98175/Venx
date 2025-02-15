"use client";
import React, { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      alert("Password reset successfully!");
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
          Reset Password
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="text-secondary font-normal text-lg font-inter">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-quatanery p-3 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none w-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 text-gray-500"
            >
              {showPassword ? "" : ""}
            </button>
          </div>
          <div>
            <label className="text-secondary font-normal text-lg font-inter">
              Re-Enter Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="border border-quatanery p-3 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none w-full"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-9 right-3 text-gray-500"
            >
              {showConfirmPassword ? "" : ""}
            </button>
          </div>
          {/* Error Message */}
          {error && <p className="text-red-500 text-base">{error}</p>}

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

export default ResetPassword;
