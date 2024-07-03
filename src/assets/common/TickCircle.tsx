import * as React from "react";
import { SVGProps } from "react";
const TickCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 1.667c-4.592 0-8.333 3.741-8.333 8.333 0 4.592 3.741 8.333 8.333 8.333 4.592 0 8.333-3.741 8.333-8.333 0-4.592-3.741-8.333-8.333-8.333Zm3.983 6.416-4.725 4.725a.624.624 0 0 1-.883 0L6.017 10.45a.629.629 0 0 1 0-.883.629.629 0 0 1 .883 0l1.917 1.916L13.1 7.2a.629.629 0 0 1 .883 0 .629.629 0 0 1 0 .883Z"
      fill="#20EEAD"
    />
  </svg>
);
export default TickCircle;
