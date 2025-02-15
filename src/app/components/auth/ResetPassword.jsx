"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CommonLogo from "../common/CommonLogo";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";

const ResetPassword = () => {
  const router = useRouter();
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
    router.push("/");
  };
  return (
    <div className="max-w-full">
      <div className="h-[810px] bg-primary flex justify-center items-center min-h-screen w-full font-inter">
        <div className="bg-white p-10 w-[489px] h-[444px] flex flex-col justify-center  rounded-2xl shadow-lg relative">
          {/* Logo */}
          <CommonLogo />
          <div className="h-[317px] pt-10">
            <h2 className="text-center text-2xl lg:text-3xl font-semibold text-primary mb-4 font-inter">
              Reset Password
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <div>
                <label className="text-secondary font-normal text-lg font-inter">
                  Password
                </label>
                <CommonInput
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required={true}
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
                <CommonInput
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required={true}
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
              <CommonButton text="Submit" />

              {/* Signup Link */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
