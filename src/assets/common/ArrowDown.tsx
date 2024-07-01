import * as React from "react";
import { SVGProps } from "react";
const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.947 5.453H4.053c-.64 0-.96.774-.506 1.227L7 10.133a1.42 1.42 0 0 0 2.007 0L10.32 8.82l2.14-2.14a.721.721 0 0 0-.513-1.227Z"
      fill="#86A0AC"
    />
  </svg>
);
export default ArrowDown;
