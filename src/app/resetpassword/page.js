import React from "react";
import RestPassword from "../components/auth/ResetPassword";
import { ResetPasswordIllustration } from "../components/common/illustrationSvgs";

const resetpassword = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 min-h-screen bg-white">
        <div className="items-center max-w-full min-h-screen flex justify-centertf">
          <ResetPasswordIllustration />
        </div>
        <RestPassword />
      </div>
    </>
  );
};

export default resetpassword;
