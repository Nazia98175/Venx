"use clientss";

import React, { useState } from "react";

const CommonInput = ({ type, name, value, onChange, required }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="input-style"
      required={required}
    />
  );
};

export default CommonInput;
