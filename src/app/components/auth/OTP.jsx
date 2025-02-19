"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import CommonLogo from "../common/CommonLogo";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";
import { Button } from "@/components/ui/button";

const OTP = () => {
  const router = useRouter();
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
  const handleSubmit = () => {
    router.push("/resetpassword");
  };
  return (
    <div className="max-w-full">
      <div className="h-screen bg-primary px-5 lg:px-0 flex justify-center items-center min-h-screen w-full font-inter">
        <div className="bg-white p-5 lg:p-10 w-[489px] h-[515px] flex flex-col justify-center  rounded-2xl shadow-lg relative">
          {/* Logo */}
          <CommonLogo />
          <div className="h-[267px] pt-10">
            <h2 className="text-center text-2xl lg:text-3xl font-semibold text-primary mb-4 font-inter">
              Enter OTP Code
            </h2>

            {/* Form */}
            <div className="flex justify-center space-x-2 mb-4">
              {otp.map((value, index) => (
                <CommonInput
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  name="OTP"
                  value={value}
                  required={true}
                  maxLength={1}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-lg font-bold border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              ))}
            </div>

            {/* Verify Button */}

            <Button variant="default" size="default">
              Submit
            </Button>

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
      </div>
    </div>
  );
};

export default OTP;
