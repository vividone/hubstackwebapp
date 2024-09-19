'use client'
import EyeIcon from "@/assets/icons/EyeIcon";
import EyeSlashIcon from "@/assets/icons/EyeSlashIcon";
import { InputProps, TextareaProps } from "@/interface/common/input";
import { ChangeEvent, FC, HTMLInputTypeAttribute, useState } from "react";
import PhoneInput from "react-phone-number-input";
import SearchIcon from "@/assets/icons/SearchIcon";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import { NumericFormat } from "react-number-format";
import { AddIcons,SubtractIcons } from "@/assets/icons/MathIcons";
import Check from "@/assets/icons/checkBox";

export const Input: FC<Partial<InputProps>> = ({ ...props }) => {
  const [focus, setFocus] = useState(false);
  const { className, containerClassName, ...rest } = props;
  return (
    <div>
    <div
      className={`flex items-center rounded-lg xl:h-[66px] h-12 px-6 border transition-all ease-in duration-100 
          ${
            props.error
              ? "border-[#FFAFAF] shadow-glow"
              : focus
              ? " border  border-primary-200 shadow-focus-glow"
              : " border-[#E7E6F2]"
          }
          placeholder:text-primary_royal-400
          ${
            props.disabled
            ? "bg-[#E7E6F2]/[0.5]": "bg-white "
          }
          ${containerClassName}
          `}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {(props.leftIcon || false) && !props.error && !focus && (
        <props.leftIcon />
      )}
      {(props.activeLeftIcon || false) && !props.error && focus && (
        <props.activeLeftIcon />
      )}
      {props.error && props.errorIcon ? <props.errorIcon /> : <> </>}
      <input
        className={`!outline-none bg-transparent  transition-all duration-300 ease-in-out mt-1   w-full placeholder:text-base
              ${className ? className : ""}
              placeholder:text-s lg:placeholder:text-base
              `}
        {...rest}
      />
      {props.rightIcon && !focus && <props.rightIcon />}
      {props.activeRightIcon && !focus && <props.activeRightIcon />}
    </div>
    <p className={`text-[12px] mt-1 ${props.error ? "text-red-600" : "opacity-[0.7]"}`}>{props.error}</p>
    </div>
  );
};

export const VariantInput: FC<Partial<InputProps>> = ({ ...props }) => {
  const [focus, setFocus] = useState(false);
  const { className, containerClassName, labelname, error, ...rest } = props;

  // Track whether the input has content
  const hasContent = Boolean(rest.value);

  // Handle onBlur to keep focus true if there's content
  const handleBlur = () => {
    if (!hasContent) {
      setFocus(false);
    }
  };

  return (
    <>
    <div
      className={`flex items-center  relative  rounded-md xl:h-[66px] h-12  gap-x-3  px-4 border transition-all ease-in duration-100 
          ${
            props.error
              ? "border-maroon-200"
              : focus
              ? "bg-white border border-primary-500 "
              : "bg-[#F9F9F9]  border-[#E7E6F2]"
          }
          placeholder:text-grey-700
          ${containerClassName}
          `}
      onFocus={() => setFocus(true)}
      onBlur={handleBlur}
    >
      {focus && (
        <div
          className={`absolute  transition-all duration-300 ease-in-out  top-0 p-1 -mt-3  text-xs bg-white font-normal max-w-[max-content] ${
            error ? "text-maroon-200" : "text-primary-500"
          }`}
        >
          {labelname}
        </div>
      )}
      {(props.leftIcon || false) && !props.error && !focus && (
        <props.leftIcon />
      )}
      {(props.activeLeftIcon || false) && !props.error && focus && (
        <props.activeLeftIcon />
      )}
      {props.error && props.errorIcon ? <props.errorIcon /> : <> </>}
      <input
        className={`!outline-none bg-transparent transition-all duration-300 ease-in-out w-full
              ${className ? className : ""}
              placeholder:text-s lg:placeholder:text-base placeholder:text-grey-700
              `}
        {...rest}
        placeholder={focus ? "" : props.placeholder}
      />
      {props.rightIcon && !focus && <props.rightIcon />}
      {props.activeRightIcon && !focus && <props.activeRightIcon />}
    </div>
    <p className={`text-[12px] ${props.error ? "text-red-600" : "opacity-[0.7]"}`}>{props.error}</p>
    </>
  );
};

export const TextArea: FC<Partial<TextareaProps>> = ({ ...props }) => {
  const [focus, setFocus] = useState(false);
  const [keyPressSync, setKeyPressSync] = useState<string>("");
  const onKeyPress = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setKeyPressSync(e.target.value);
    props?.onChange && props.onChange(e);
  };

  const { className, containerClassName, ...rest } = props;
  // Calculate the remaining characters
  const wordCount = keyPressSync.trim().split(/\s+/).filter(Boolean).length;
  const maxWords = parseInt(props.maxWords || "0", 10); // Convert to number
  const remainingWords = maxWords - wordCount;

  return (
    <div
      className={`flex flex-col justify-between  rounded-lg 
      ${props.height ? props.height : "h-[6rem]"}
       w-full gap-x-3 px-2 border transition-all ease-in duration-100 
      ${
        props.error
          ? "border-maroon-200"
          : focus
          ? "bg-white  border  border-primary-500 "
          : "bg-[#F9F9F9]  border-[#E7E6F2]"
      }
      placeholder:text-grey-700
      ${containerClassName}
      `}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <textarea
        className={`!outline-none resize-none bg-transparent mt-2 transition-all duration-300 ease-in-out   w-full placeholder:text-base
              ${className ? className : ""}
              placeholder:text-s lg:placeholder:text-base placeholder:text-grey-700
              `}
        onChange={onKeyPress}
        onKeyUp={(e) => onKeyPress(e as any)}
        {...rest}
      />

      <div className="flex w-full justify-end pb-3">
        <p className="text-[#58527A] text-xs">
          {`${remainingWords >= 0 ? remainingWords : 0}`}/{props.maxWords || 0}{" "}
          words
        </p>
      </div>
    </div>
  );
};

// passwordvariant
export const PasswordVariantInput: FC<Partial<InputProps>> = ({ ...props }) => {
  const [focus, setFocus] = useState(false);
  const [show, setShow] = useState(false);
  const { className, containerClassName, ...rest } = props;
  return (
    <>
    <div
      className={`flex items-center  relative  rounded-md xl:h-[66px] h-12  gap-x-3  px-6 border transition-all ease-in duration-100 
            ${
              props.error
                ? "border-[#FFAFAF] shadow-glow"
                : focus
                ? "bg-white  border  border-primary-500"
                : "bg-[#F9F9F9]  border-[#E7E6F2]"
            }
            ${containerClassName}
            `}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {focus && (
        <div
          className={`absolute top-0  p-1 -mt-4 text-xs  bg-white font-normal max-w-[max-content]
        ${props.error ? "text-maroon-200" : "text-primary-500"}
        `}
        >
          {props.labelname}
        </div>
      )}
      {(props.leftIcon || false) && !props.error && !focus && (
        <props.leftIcon />
      )}
      {(props.activeLeftIcon || false) && !props.error && focus && (
        <props.activeLeftIcon />
      )}
      {props.error && props.errorIcon ? <props.errorIcon /> : <> </>}
      <input
        className={`!outline-none bg-transparent  transition-all duration-300 ease-in-out   w-full
                ${className ? className : ""}
                placeholder:text-s lg:placeholder:text-base placeholder:text-grey-700
                `}
        type={show ? "text" : "password"}
        {...rest}
        placeholder={focus ? "" : props.placeholder}
      />
      {show ? (
        <EyeSlashIcon onClick={() => setShow(!show)} />
      ) : (
        <EyeIcon onClick={() => setShow(!show)} />
      )}
    </div>
    <p className={`text-[12px] ${props.error ? "text-red-600" : "opacity-[0.7]"}`}>{props.error}</p>
    </>
  );
};

export const PhoneNumberInput: FC<Partial<InputProps>> = (props) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className="relative border-none">
      {focus && (
        <div
          className={` absolute  ml-10 p-1 -mt-4 bg-white   text-left text-xs 
        ${props.error && !props.value ? "text-maroon-200" : "text-primary-500"}
        `}
        >
          Phone Number
        </div>
      )}
      <PhoneInput
        defaultCountry="NG"
        addInternationalOption={true}
        placeholder={focus ? "" : "Phone number"}
        onFocus={() => setFocus(true)}
        onChange={props?.setValue ? props?.setValue : () => props.value}
        onCountryChange={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={` !rounded-[6px] border-none h-10 min-[40px]  ${
          focus ? " " : "   !outline-none !shadow-none"
        }text-sm transition-all duration-300 `}
        value={props.value || ""}
      />
    </div>
  );
};


export const SearchInput: React.FC<any> = ({ ...props }) => {
  const [focus, setFocus] = useState(false);
  const { className, containerClassName, size, ...rest } = props;

  return (
    <div
      className={`flex items-center relative w-full md:w-[340px] xl:h-[66px] h-[45px] gap-x-3 px-6 border rounded-2xl transition-all ease-in duration-100
        ${
          props.error
            ? "border-[#FFAFAF] shadow-glow"
            : focus
            ? "bg-white border border-primary-500"
            : "bg-white border-[#E7E6F2]"
        }
        ${containerClassName}
      `}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <SearchIcon />
      <input
        className={`!outline-none focus:bg-transparent transition-all duration-300 ease-in-out w-[100%]
          ${className || ""}
          placeholder:text-s lg:placeholder:text-base placeholder:text-[#8C8B92]-400 text-[16px]
        `}
        placeholder={props.placeholder || "Search..."}
        {...rest}
      />
    </div>
  );
};

/* RangeValue Component */
export const RangeValue: React.FC = () => {
  const [range, setRange] = useState<number>(10);

  const increase = (): void => {
    setRange((prev) => prev + 1);
  };
  const decrease = (): void => {
    setRange((prev) => (prev > 0 ? prev - 1 : 0)); // Prevent negative values
  };

  return (
    <div className="flex h-[40px] md:h-[48px] items-center">
      <div
        onClick={increase}
        className="cursor-pointer w-[40px] md:w-[48px] h-[40px] md:h-[48px] border border-[#DBDBDB] rounded-tl-[10px] rounded-bl-[10px] p-2 flex items-center justify-center"
      >
        <AddIcons />
      </div>
      <input
        type="number"
        value={range}
        className="w-[50px] md:w-[60px] h-[40px] md:h-[48px] border-t border-b border-[#DBDBDB] text-center outline-none"
        readOnly
      />
      <div
        onClick={decrease}
        className="cursor-pointer w-[40px] md:w-[48px] h-[40px] md:h-[48px] border border-[#DBDBDB] rounded-tr-[10px] rounded-br-[10px] p-2 flex items-center justify-center"
      >
        <SubtractIcons />
      </div>
    </div>
  );
};


/* Checkbox Component */
export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div
      onClick={toggleCheckbox}
      className={`cursor-pointer h-[28px] md:h-[33px] w-[28px] md:w-[33px] border-[2.5px] border-[#3D3066] rounded flex items-center justify-center 
         ${checked ? "bg-white" : "bg-transparent"}`}
      aria-label="checkbox"
    >
      {checked && <Check />} 
    </div>
  );
};
