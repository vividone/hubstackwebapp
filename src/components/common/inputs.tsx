'use client'
import EyeIcon from "@/assets/icons/EyeIcon";
import EyeSlashIcon from "@/assets/icons/EyeSlashIcon";
import { InputProps, TextareaProps } from "@/interface/common/input";
import { ChangeEvent, FC, useState } from "react";
import PhoneInput from "react-phone-number-input";

export const Input: FC<Partial<InputProps>> = ({ ...props }) => {
  const [focus, setFocus] = useState(false);
  const { className, containerClassName, ...rest } = props;
  return (
    <div
      className={`flex items-center rounded-lg xl:h-[66px] h-12 gap-x-3 px-6 border transition-all ease-in duration-100 
          ${
            props.error
              ? "border-[#FFAFAF] shadow-glow"
              : focus
              ? "bg-white  border  border-primary-200 shadow-focus-glow"
              : "bg-white  border-[#E7E6F2]"
          }
          placeholder:text-primary_royal-400
          ${
            props.disabled
            ? "bg-[#E7E6F2]/[0.5]": ""
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
        className={`!outline-none bg-transparent  transition-all duration-300 ease-in-out   w-full placeholder:text-base
              ${className ? className : ""}
              placeholder:text-s lg:placeholder:text-base
              `}
        {...rest}
      />
      {props.rightIcon && !focus && <props.rightIcon />}
      {props.activeRightIcon && !focus && <props.activeRightIcon />}
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
