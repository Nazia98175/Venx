"use client";

import Link from "next/link";
import { useState } from "react";
import CommonButton from "../common/CommonButton";
import CommonInput from "../common/CommonInput";
import CommonLogo from "../common/CommonLogo";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Login = () => {
  const router = useRouter();
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
    router.push("/dashboard");
  };

  return (
    <div className="max-w-full">
      <div className="h-screen bg-primary px-5 lg:px-0 flex justify-center items-center min-h-screen w-full font-inter">
        <div className="bg-white p-5 lg:p-10 w-[489px] h-[515px] flex flex-col justify-center  rounded-2xl shadow-lg relative">
          {/* Logo */}
          <CommonLogo />
          <div className="h-[389px] pt-10">
            <h2 className="text-center text-2xl lg:text-3xl font-semibold text-primary mb-4 font-inter">
              Welcome back!
            </h2>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 h-[324px]">
              {/* Username */}
              <div>
                <label className="text-secondary font-normal text-base lg:text-lg font-inter">
                  User Name
                </label>
                <CommonInput
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required={true}
                  className="w-full px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Password */}
              <div className="relative">
                <label className="text-secondary flex justify-between items-center font-normal text-base lg:text-lg font-inter">
                  Password
                  <Link
                    href="/forgotpassword"
                    className="text-base lg:text-lg text-primary font-medium float-right mt-1"
                  >
                    Forgot your password?
                  </Link>
                </label>
                <div className="relative">
                  <CommonInput
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required={true}
                    className="w-full px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                <label className="ml-1 m-0 text-sm lg:text-base text-primary">
                  Remember me
                </label>
              </div>
              {/* Login Button */}
              <Button variant="default" size="default">
                Log in
              </Button>
              {/* Signup Link */}
              <p className="text-center text-secondary text-sm lg:text-base mt-3">
                Don’t have an account?{" "}
                <Link
                  href="/createaccount"
                  className="text-primary font-medium"
                >
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
