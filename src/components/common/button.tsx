import { Loader } from "@/assets/common/loader";
import React, { ButtonHTMLAttributes, SVGProps, ReactNode } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: // This ones here are from the design
  "primary" | "secondary" | "special" | "terminus";
  size?: "sm" | "md" | "lg" | "long" | "content" | "full"; // the last 'full' is for default fields so it takes all the space
  isLoading?: boolean;
  color?: "primary" | "secondary" | "special" | "terminus";
  switchButton?: boolean;
  isActive?: boolean;
  switchRedButton?: boolean;
  icon?: SVGProps<SVGSVGElement> | any;
  dataTest?: string;
  name?: string;
  id?: string;
}

export const Button = ({
  size = "full",
  className,
  isLoading,
  dataTest,
  variant = "primary",
  children,
  ...props
}: Props) => {
  const sizes = {
    sm: "py-[8px] text-[12px] px-[6px] h-[32px] w-[max-content]",
    md: "  text-sm  text-base h-10 w-[max-content]",
    lg: " text-base h-12 w-[max-content]",
    long: " text-[18px] py-[20px] 2xl:w-[457px] md:w-[400px] w-full",
    full: "w-full text-[13px] text  px-5",
    content: "text-base max-w-[max-content]",
  };
  const colors = {
    primary: `bg-[#3D3066]   hover:bg-[#0443AE] active:bg-[#003080] 
    text-white rounded-[6px] 
    disabled:opacity-30 `,
    secondary: `bg-[#F9F9F9] border-[#6E688D] bg-transparent border text-[#58527A] hover:bg-[#F7F7F7] hover:text-[#0D0630] hover:border-[#AEBFC8] active:bg-[#DBE4FF] 
    text-[#104C6A] active:text-[#104C6A] px-[10px] font-medium
    disabled:opacity-30 `,
    special: `${
      props.isActive
        ? "bg-[#2B6AD4] text-white"
        : "border-[#6E688D] bg-transparent border text-[#58527A] "
    } rounded-[24px] border   !text-[13px]  md:text-base hover:border-[#E1ECFE] active:border-[#B0CDFC]
    hover:bg-[#E1ECFE] hover:text-[#0443AE] active:bg-[#B0CDFC] active:text-[#003080] disabled:border-[#AEACBA]
    disabled:text-[#5E5975] disabled:bg-transparent !font-normal
 `,
    terminus: `bg-[#FFFCFB] hover:bg-[#FFE5D5] border border-[#FFE5D5] hover:text-[#F65555] active:bg-[#FFE5D5] 
    text-[#F65555] `,
  };
  const sizeClassName = sizes[size];
  const colorClassName = colors[variant];

  return (
    <button
      className={`flex first-letter:!uppercase gap-2 text-center whitespace-nowrap items-center justify-center transition-colors 
      duration-300  ease-in-out cursor-pointer disabled:cursor-not-allowed px-6 py-4 font- outline-none
       rounded-[6px] ${sizeClassName} ${colorClassName} ${className}`}
      disabled={isLoading || props.disabled}
      data-test={dataTest}
      {...props}
    >
      {isLoading ? <Loader className="fill-white"/> : children}
    </button>
  );
};
