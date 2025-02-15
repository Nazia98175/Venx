"use clientss";

import React, { useState } from "react";

const CommonInput = ({
  type,
  name,
  value,
  onChange,
  required,
  maxLength,
  onKeyDown,
  ref,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="input-style"
      required={required}
      maxLength={maxLength}
      onKeyDown={onKeyDown}
      ref={ref}
    />
  );
};

export default CommonInput;
