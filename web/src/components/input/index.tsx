import React from "react";

export interface IInput {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
}

export function Input(props: IInput) {
  return (
    <input
      className="w-full h-[45px] bg-[#F1F5F4] pl-[14px] py-3 rounded outline-none"
      {...props}
    />
  );
}
