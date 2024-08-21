import React, { useState } from "react";
import { NumberFormatBase, NumericFormatProps } from "react-number-format";

interface CurrencyProps extends  NumericFormatProps {
  error?: string;
}

const CurrencyField = ({ onValueChange, error, ...props }: CurrencyProps) => {
  const [value, setValue] = useState<string | number>("");

  const handleChange = (v: any, sourceInfo: any) => {
    // Set the value to value * 100 because it was divided on the field value prop
    setValue(parseFloat(v.value) * 100);
    if (onValueChange) {
      onValueChange({ ...v, floatValue: v.floatValue / 100 }, sourceInfo);
    }
  };

  const currencyFormatter = (formatted_value: any) => {
    // Set to 0,00 when "" and divide by 100 to start by the cents when start typing
    if (!Number(formatted_value)) return "0.00";
    const br: Intl.NumberFormatOptions | undefined = { style: "currency", currency: "NGN" };
    return new Intl.NumberFormat("en-NG", br).format(formatted_value / 100);
  };

  const keyDown = (e: any) => {
    //This if keep the cursor position on erase if the value is === 0
    if (e.code === "Backspace" && !value) {
      e.preventDefault();
    }
    // This if sets the value to 0 and prevent the default for the cursor to keep when there's only cents
    if (e.code === "Backspace" && +value < 1000) {
      e.preventDefault();
      setValue(0);
    }
  };

  return (
    <>
    <NumberFormatBase
      {...props}
      value={Number(value) / 100 || value}
      format={currencyFormatter}
      onValueChange={handleChange}
      onKeyDown={keyDown}    
      className={`!outline-none bg-transparent transition-all rounded-[10px] duration-300 ease-in-out w-full transition-all duration-300 ease-in-out  top-0 p-1 xl:h-[66px] h-12  px-4 border font-normal
      focus:border-primary-500  ${
        props.onError
          ? "border-maroon-200"
          : "bg-[#F9F9F9]  border-[#E7E6F2]"
      }`}
    /> 
    <p className={`text-[12px] ${error ? "text-red-600" : "opacity-[0.7]"}`}>{error}</p>
    </>
  );
};

export default CurrencyField;
// USAGE
//  const [value, setState] = useState(0);
//  const onValueChange = (v: any) => console.log(v);
//  return (
//    <CurrencyField onValueChange={onValueChange} value={value} {...args} />
//    );
//   };
