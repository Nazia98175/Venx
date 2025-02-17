"use client";
import Link from "next/link";
import React, { useState } from "react";
import CommonLogo from "../common/CommonLogo";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";
import { useRouter } from "next/navigation";

const CreateAccount = () => {
  const router = useRouter();
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
    router.push("/dashboard");
  };
  return (
    <div className="max-w-full">
      <div className="h-[1060px] bg-primary flex justify-center items-center min-h-screen w-full font-inter">
        <div className="bg-white p-10 w-[489px] h-[856px] flex flex-col justify-center  rounded-2xl shadow-lg relative">
          {/* Logo */}
          <CommonLogo />
          <div className="h-[730px] pt-10">
            <h2 className="text-center text-2xl lg:text-3xl font-semibold text-primary mb-4 font-inter">
              Create An Account
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div>
                <label className="text-secondary font-normal text-lg font-inter">
                  Vendor Name
                </label>
                <CommonInput
                  type="text"
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleChange}
                  required={true}
                  className="border border-quatanery p-3 rounded-lg w-full focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-secondary font-normal text-lg font-inter">
                  GST No.
                </label>
                <CommonInput
                  type="text"
                  name="gstNo"
                  value={formData.gstNo}
                  onChange={handleChange}
                  required={true}
                  className="border border-quatanery p-3 rounded-lg w-full focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-secondary font-normal text-lg font-inter">
                  Email ID
                </label>
                <CommonInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required={true}
                  className="border border-quatanery p-3 rounded-lg w-full focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-secondary font-normal text-lg font-inter">
                  Mobile Number
                </label>
                <CommonInput
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required={true}
                  className="border border-quatanery p-3 rounded-lg w-full focus:ring-primary"
                />
              </div>
              {/* Password Input */}
              <div className="relative">
                <div>
                  <label className="text-secondary font-normal text-lg font-inter">
                    Password
                  </label>
                  <CommonInput
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required={true}
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
                  <CommonInput
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required={true}
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
              <CommonButton text="Sign Up" />

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
      </div>
    </div>
  );
};

export default CreateAccount;
