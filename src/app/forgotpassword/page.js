import React from "react";
import ForgotPassword from "../components/auth/ForgotPassword";
import { ForgotPasswordIllustration } from "../components/common/illustrationSvgs";

const forgotpassword = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 min-h-screen bg-white">
        <div className="items-center max-w-full min-h-screen flex justify-center">
          <ForgotPasswordIllustration />
        </div>
        <ForgotPassword />
      </div>
    </>
  );
};

export default forgotpassword;
