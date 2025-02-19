import React from "react";
import ForgotPassword from "../components/auth/ForgotPassword";
import { ForgotPasswordIllustration } from "../components/common/illustrationSvgs";

const forgotpassword = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-white">
        <div className="items-center max-w-full min-h-screen invisible lg:visible justify-center hidden lg:flex ">
          <ForgotPasswordIllustration />
        </div>
        <ForgotPassword />
      </div>
    </>
  );
};

export default forgotpassword;
