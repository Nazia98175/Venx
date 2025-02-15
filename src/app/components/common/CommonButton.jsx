import React from "react";

const CommonButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full bg-primary text-white py-3 px-6 rounded-full hover:bg-white hover:text-primary hover:border-primary border transition cursor-pointer"
    >
      {text}
    </button>
  );
};

export default CommonButton;
