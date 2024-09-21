import React from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import { formatAmount } from "@/helpers/amountFormatter";
import CurrentBalance from "../currentBalance";
import { FlowProps } from "../modalsLayout";
interface CableTvProps extends FlowProps {
  active: any;
  completeAction: () => void;
  isSuccess?: boolean;
}

const CableTvPayment: React.FC<CableTvProps> = ({ data, active, completeAction}:any) => {

  return (
    <div className="mt-4">
      <CurrentBalance />

        <div className="flex flex-col gap-1">
          
          <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
            <div className="flex  flex-wrap items-center gap-4">
              <Image src={"/images/cableTvImages/" + active?.ShortName +".jpg"} alt={active?.Name} width={80} height={80} />
              <p className="text-xl font-semibold text-[#3D3066]">{active?.Name}</p>
            </div>
            <div className="py-4">
              <p>Smartcard or Decoder Number</p>
              <p className=" opacity-[0.7]">{data?.customerId}</p>
            </div>

            <div className="flex gap-12">
              <div>
                <p>Full Name</p>
                <p className="opacity-[0.7]">{data?.fullname}</p>
              </div>
              <div>
                <p>Cable TV Plan</p>
                <p className="opacity-[0.7]">{data?.serviceProvider?.value}</p>
              </div>
            </div>
          </div>
          
          <p className="text-center pb-4 pt-8">The amount of  NGN{formatAmount(data?.amount)} will be debited from your wallet balance, proceed below to complete transaction </p>

        <div className="flex flex-col gap-4">
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

export default CableTvPayment;
