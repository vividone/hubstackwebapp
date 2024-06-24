import React, { FC, HTMLAttributes, useState } from "react";
import InputOtp from "react-otp-input";

export interface IOTPInput extends HTMLAttributes<HTMLInputElement> {
  setValue: any;
  value: string;
  error: boolean;
}
export const OTPInput: FC<Partial<IOTPInput>> = ({ className, ...rest }) => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (e: string) => {
    setOtp(e);
    rest.setValue && rest.setValue(e);
  };
  return (
    <InputOtp
      value={otp.toUpperCase()}
      containerStyle={{
        backgroundColor: "#FCFDFD",
        gap: "12px",
        display: "flex",
        justifyContent: "space-between",
      }}
      inputStyle={{
        backgroundColor: "#FCFDFD",
        border: !rest.error ? "1px solid #CFD9DE" : "1px solid #FFAFAF",
        outlineColor: "#6FAEF6",
        boxShadow: !rest.error ? "none" : "0px 0px 4px 0px #FF656566",
        fontWeight: 500,
        fontSize: "23px",
        color: "#323232",
        width: "48px",
        height: "48px",
        borderRadius: "8px",
      }}
      onChange={handleOtpChange}
      numInputs={6}
      renderSeparator={<> </>}
      renderInput={(props) => <input {...props} className={className} />}
    />
  );
};
