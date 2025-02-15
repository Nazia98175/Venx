"use client";
import React, { useEffect, useRef, useState } from "react";

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60); // 60-second countdown
  const inputRefs = useRef([]);

  // Handle OTP input
  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next field
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Start countdown on mount
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Reset OTP & countdown
  const resendOtp = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimeLeft(60);
    inputRefs.current[0]?.focus();
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
          Enter OTP Code
        </h2>

        {/* Form */}
        <div className="flex justify-center space-x-2 mb-4">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={value}
              maxLength={1}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-lg font-bold border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button className="bg-primary text-tertiary py-3 px-6 rounded-full font-semibold hover:bg-tertiary hover:text-primary hover:border-primary border transition cursor-pointer w-full">
          Verify
        </button>

        {/* Resend OTP */}
        <p className="text-secondary mt-4 text-center">
          Resend OTP in{" "}
          <span className="font-bold text-primary">{timeLeft}s</span>
        </p>
        {timeLeft === 0 && (
          <button
            onClick={resendOtp}
            className="text-primary font-semibold mt-2 text-center"
          >
            Resend OTP
          </button>
        )}
      </div>
    </div>
  );
};

export default OTP;
