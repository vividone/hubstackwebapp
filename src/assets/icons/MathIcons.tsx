import React from "react";
import { SVGProps } from "react";

export const AddIcons = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.570312 11.9999H23.4275M11.9989 0.571289V23.4284"
        stroke="#3D3066"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const SubtractIcons = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="2"
      viewBox="0 0 32 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M31 1H1" stroke="#3D3066" stroke-linecap="round" />
    </svg>
  );
};