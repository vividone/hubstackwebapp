"use client";
import React from "react";
import { Button } from "../../common/button";
import { formatAmount } from "@/helpers/amountFormatter";
import CurrentBalance from "../currentBalance";

const BillPayment: React.FC<any> = ({
  data,
  bill,
  completeAction
}:
any) => {

  return (
    <div className="mt-4">

      <div className="w-full border-y border-[#E7E6F2]">
        <CurrentBalance />
      </div>

      <div className="flex flex-col gap-1  mt-6">
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
          <div className="flex  flex-wrap items-center gap-4">
            <p className="text-xl font-semibold text-[#3D3066]">{data?.name}</p>
          </div>
          <div className="py-4">
            <p>{bill === "Internet" ? "Mobile Number" : bill === "Cable TV" ? "Decoder number" : "BET ID"}</p>
            <p className=" opacity-[0.7]">{data?.customerId}</p>
          </div>
        </div>

        <p className="text-center mt-4">
          The amount of{" "}
          <span className="font-bold">
            NGN{formatAmount(data?.amount + data?.serviceProvider.ItemFee)}
          </span>{" "}
          will be debited from your wallet balance, proceed below to complete
          transaction{" "}
        </p>

        <div className="flex flex-col gap-4 mt-6">
          <Button
            variant="primary"
            size="full"
            type="submit"
            isLoading={data?.isPending}
            onClick={()=> completeAction()} 
          >
            <span className="text-[16px]">PROCEED WITH WALLET</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillPayment;
