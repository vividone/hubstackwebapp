import React from "react";
import { SVGProps } from "react";

const NewNairaIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="28"
      height="30"
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.666016 10H3.99935V0H7.33268L13.0327 10H20.666V0H23.9993V10H27.3327V13.3333H23.9993V16.6667H27.3327V20H23.9993V30H20.666L14.9493 20H7.33268V30H3.99935V20H0.666016V16.6667H3.99935V13.3333H0.666016V10ZM7.33268 10H9.21601L7.33268 6.71667V10ZM7.33268 13.3333V16.6667H13.0327L11.1327 13.3333H7.33268ZM20.666 23.3333V20H18.7493L20.666 23.3333ZM14.9327 13.3333L16.8493 16.6667H20.666V13.3333H14.9327Z"
        fill="#000000"
      />
    </svg>
  );
};

export default NewNairaIcon;
