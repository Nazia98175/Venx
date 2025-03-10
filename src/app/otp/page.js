import React from "react";
import OTP from "../components/auth/OTP";
import { OTPIllustration } from "../components/common/illustrationSvgs";

const otp = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-white">
        <div className="items-center max-w-full min-h-screen invisible lg:visible justify-center hidden lg:flex ">
          <OTPIllustration />
        </div>
        <OTP />
      </div>
    </>
  );
};

export default otp;
