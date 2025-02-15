"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CommonLogo from "../common/CommonLogo";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";

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
    <div className="max-w-full">
      <div className="h-[810px] bg-primary flex justify-center items-center min-h-screen w-full font-inter">
        <div className="bg-white p-10 w-[489px] h-[381px] flex flex-col justify-center  rounded-2xl shadow-lg relative">
          {/* Logo */}
          <CommonLogo />
          <div className="h-[255px] pt-10">
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
                <CommonInput
                  type="text"
                  name="username"
                  value={input}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required={true}
                />
              </div>
              {/* Signup Link */}

              <CommonButton text="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
