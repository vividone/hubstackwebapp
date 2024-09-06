import React from "react";
import { SVGProps } from "react";

const ArrowIcon = ({color,...props}: SVGProps<SVGSVGElement>) => {
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
        d="M10 1.59521H14V5.48637"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 1.59521L8.35 7.09147C8.25654 7.18059 8.13088 7.23051 8 7.23051C7.86912 7.23051 7.74346 7.18059 7.65 7.09147L5.35 4.85406C5.25654 4.76494 5.13088 4.71502 5 4.71502C4.86912 4.71502 4.74346 4.76494 4.65 4.85406L1 8.40474"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon ;
