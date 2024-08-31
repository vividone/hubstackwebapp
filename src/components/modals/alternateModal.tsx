import React, { useState } from "react";
import { Button } from "@/components/common/button";
import CopyIcon from "@/assets/icons/CopyIcon";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface props {
  setFlow: (arg: number) => void;
}
const AlternatePaymentModal = ({ setFlow }: props) => {
  const accountDetails = [
    { label: "Account Number", value: "0209064859" },
    { label: "Account Name", value: "Babalola Zainab" },
    { label: "Bank Name", value: "Sterling Bank" },
  ];
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text: string) => {
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <>
      <div className="w-[80%] font-OpenSans">
        <h2 className="font-semibold text-[20px]">Account Transfer</h2>
        <p className="text-[16px] font-[400] text-[#111111]">
          Transfer 1,100 to the account below for this meter only. This session
          expires in 30 minutes.
        </p>
      </div>
      <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-md p-4 md:p-8 font-OpenSans">
        {accountDetails.map((item, index) => (
          <div className="flex justify-between items-center mb-4" key={index}>
            <div>
              <h2 className="text-[14px] font-light">{item.label}</h2>
              <p className="font-semibold text-[20px]">{item.value}</p>
            </div>
            <CopyToClipboard
              text={item.value}
              onCopy={() => handleCopy(item.value)}
            >
              <div className="cursor-pointer">
                <CopyIcon width={20.31} height={20.31} />
              </div>
            </CopyToClipboard>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-1 px-[40px]">
        <p className="text-center mt-4">
          Please click the button below after a successful transfer. Your token
          will be sent once we receive your payment.
        </p>

        <div className="flex flex-col gap-4">
          <Button
            variant="primary"
            size="full"
            type="submit"
            // isLoading={data?.isPending}
            // onClick={() => setFlow(3)}
          >
            <span className="text-[16px]">I HAVE MADE THIS TRANSFER </span>
          </Button>

          <Button
            variant="secondary"
            size="full"
            onClick={() => {
              // setShowAlternate(!showAlternate);
              // setAlternatePayment(true);
            }}
          >
            <span className="text-[16px]">USE PAYSTACK INSTEAD</span>
          </Button>
        </div>
        {copiedText && (
          <div className="fixed bottom-4 right-4 p-2 bg-[#3D3066] text-white">
            Copied: {copiedText}
          </div>
        )}
      </div>
    </>
  );
};

export default AlternatePaymentModal;