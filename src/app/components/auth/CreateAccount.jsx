"use client";
import Link from "next/link";
import React, { useState } from "react";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    vendorName: "",
    gstNo: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      alert("Account created successfully!");
      // Here, you can send data to your backend API
    }
  };
  return (
    <div className="max-w-full min-h-screen w-full flex justify-center bg-primary pb-10 p-40 font-inter">
      <div className="bg-white flex flex-col max-h-fit px-16 py-20 rounded-2xl shadow-lg w-full">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-white absolute top-24 text-black p-4 rounded-full shadow-sm">
            <img src="/logo.png" alt="logo" className="" />
          </div>
        </div>

        <h2 className="text-center text-3xl font-semibold text-primary mb-4 font-inter">
          Create An Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="text-secondary font-normal text-lg font-inter">
              Vendor Name
            </label>
            <input
              type="text"
              name="vendorName"
              placeholder=""
              value={formData.vendorName}
              onChange={handleChange}
              required
              className="border border-quatanery p-3 rounded-lg w-full focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-secondary font-normal text-lg font-inter">
              GST No.
            </label>
            <input
              type="text"
              name="gstNo"
              placeholder=""
              value={formData.gstNo}
              onChange={handleChange}
              required
              className="border border-quatanery p-3 rounded-lg w-full focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-secondary font-normal text-lg font-inter">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-quatanery p-3 rounded-lg w-full focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-secondary font-normal text-lg font-inter">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder=""
              value={formData.mobile}
              onChange={handleChange}
              required
              className="border border-quatanery p-3 rounded-lg w-full focus:ring-primary"
            />
          </div>
          {/* Password Input */}
          <div className="relative">
            <div>
              <label className="text-secondary font-normal text-lg font-inter">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder=""
                value={formData.password}
                onChange={handleChange}
                required
                className="border border-quatanery p-3 rounded-lg w-full focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-500"
              >
                {showPassword ? "" : ""}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <div>
              <label className="text-secondary font-normal text-lg font-inter">
                Re-Enter Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder=""
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="border border-quatanery p-3 rounded-lg w-full focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-3 right-3 text-gray-500"
              >
                {showConfirmPassword ? "" : ""}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-tertiary py-3 px-6 rounded-full font-semibold hover:bg-white hover:text-primary hover:border-primary border transition cursor-pointer w-full"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-base mt-2 text-center text-secondary">
            Already have an account?{" "}
            <Link href="/" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
