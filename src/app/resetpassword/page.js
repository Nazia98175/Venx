import React from "react";
import RestPassword from "../components/auth/ResetPassword";
import { ResetPasswordIllustration } from "../components/common/illustrationSvgs";

const resetpassword = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-white">
        <div className="items-center max-w-full min-h-screen invisible lg:visible justify-center hidden lg:flex">
          <ResetPasswordIllustration />
        </div>
        <RestPassword />
      </div>
    </>
  );
};

export default resetpassword;
