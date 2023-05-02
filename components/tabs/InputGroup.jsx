import React, { useState } from "react";

const InputGroup = ({ label, id, type, placeholder, onChange, user }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className={`text-md capitalize ${
            isEmpty ? "text-StrawberryRed" : "text-MarineBlue"
          }`}
        >
          {label}
        </label>
        {isEmpty && (
          <span className="text-StrawberryRed text-xs">
            This Field is required
          </span>
        )}
      </div>
      <input
        type={type}
        id={id}
        className={`${
          isEmpty && "border-StrawberryRed"
        } font-medium text-MarineBlue border border-LightGray rounded-md outline-none px-2 py-3 placeholder:text-CoolGray placeholder:font-medium placeholder:tracking-wide transition-colors duration-200 ease-in-out focus:border-MarineBlue`}
        placeholder={`e.g. ${placeholder}`}
        value={user[id]}
        onChange={onChange}
        onBlur={(e) =>
          e.target.value === "" ? setIsEmpty(true) : setIsEmpty(false)
        }
        required
        aria-required
      />
    </div>
  );
};

export default InputGroup;
