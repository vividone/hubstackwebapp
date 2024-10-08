import React from "react";

const ArrrowLeft = ({ width=20, height=20 }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1003 5.39936C10.3932 5.69225 10.3932 6.16712 10.1003 6.46002L4.56066 11.9997L10.1003 17.5394C10.3932 17.8322 10.3932 18.3071 10.1003 18.6C9.80744 18.8929 9.33256 18.8929 9.03967 18.6L2.96967 12.53C2.82902 12.3894 2.75 12.1986 2.75 11.9997C2.75 11.8008 2.82902 11.61 2.96967 11.4694L9.03967 5.39936C9.33256 5.10646 9.80744 5.10646 10.1003 5.39936Z"
        fill="#111111"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.91992 12C2.91992 11.5858 3.25571 11.25 3.66992 11.25H20.4999C20.9141 11.25 21.2499 11.5858 21.2499 12C21.2499 12.4142 20.9141 12.75 20.4999 12.75H3.66992C3.25571 12.75 2.91992 12.4142 2.91992 12Z"
        fill="#111111"
      />
    </svg>
  );
};

export default ArrrowLeft;
