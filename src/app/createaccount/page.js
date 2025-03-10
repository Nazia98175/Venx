import React from "react";
import CreateAccount from "../components/auth/CreateAccount";
import { CreateAccountIllustration } from "../components/common/illustrationSvgs";

const CreateAccountPage = () => {
  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-white">
        <div className="items-center max-w-full min-h-screen invisible lg:visible justify-center hidden lg:flex ">
          <CreateAccountIllustration />
        </div>
        <CreateAccount />
      </div>
    </>
  );
};

export default CreateAccountPage;
