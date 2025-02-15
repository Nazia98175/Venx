import React from "react";

const CommonLogo = () => {
  return (
    <div className="flex absolute justify-center items-start -top-10 left-1/2 -translate-x-1/2 mb-6">
      <div className="bg-white  text-black p-4 rounded-full shadow-sm">
        <img src="/logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default CommonLogo;
