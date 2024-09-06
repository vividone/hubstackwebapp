import React from "react";
import { SVGProps } from "react";

const LossIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 8.40479H14V4.51363"
        stroke="#DC3545"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 8.40479L8.35 2.90853C8.25654 2.81941 8.13088 2.76949 8 2.76949C7.86912 2.76949 7.74346 2.81941 7.65 2.90853L5.35 5.14594C5.25654 5.23506 5.13088 5.28498 5 5.28498C4.86912 5.28498 4.74346 5.23506 4.65 5.14594L1 1.59526"
        stroke="#DC3545"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LossIcon;