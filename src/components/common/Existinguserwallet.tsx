import React, { useState } from "react";
import { Button } from "./button";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const Mywallet = () => {
  const [visibility, setVisibility] = useState(true);
  const existingData = {
    currentBalance: "#20,000",
    accountNumber: "0209064859",
    accountName: "Zainab Babalola",
    bankName: "Providus Bank",
  };
  return (
    <div className="w-[38.5vw] p-10 flex flex-col bg-[red]">
      <div className="title flex justify-between">
        <h3 className="font-medium text-lg">My Wallet</h3>
        <Image
          src="./images/close.svg"
          alt="closebutton"
          width={22}
          height={22}
          //   onClick={}
          className="cursor-pointer"
        />
      </div>
      <div className="balance">
        <div className="currbalance flex justify-between">
          <div className="">
            <span>Current Balance</span>
            <span>{existingData.currentBalance}</span>
          </div>
          <div>
            <span className="cursor-pointer">
              <VisibilityOffOutlinedIcon />
            </span>
          </div>
        </div>
        <Button size="full">FUND WALLET</Button>
      </div>
      <div className="accountNumber">
        <div className="accountNumber">
          <div className="">
            <div className="">
              <span>Account Number</span>
              <span>{existingData.accountNumber}</span>
            </div>
            <div className="copy logo"></div>
          </div>
          <div className="">
            <div className="">
              <span>Account Name</span>
              <span>{existingData.accountNumber}</span>
            </div>
            <div className="Bank">
              <span className="bankName">Bank Name</span>
              <span className="">{existingData.bankName}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Transaction">
        <h4>Transactions</h4>
        {/* <ul>
                li
            </ul> */
        }
        <div>
          <span>VIEW MORE TRANSACTIONS</span>
        </div>
      </div>
    </div>
  );
};

export default Mywallet;
