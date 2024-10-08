"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import CurrentBalance from "../currentBalance";
import { currencyFormatter } from "@/helpers/currencyConvert";


const DataPayment: React.FC<any> = ({
  data,
  completeAction
}: any) => {

  return (
    <div className="mt-4">
      <div className="w-full border-y border-[#E7E6F2]s">
      <CurrentBalance />
      </div>

      <div className="flex flex-col gap-1 mt-6">
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
          <div className="flex  flex-wrap items-center gap-4">
            <Image
              src={`/images/data/${data?.service.ShortName}.jpg`} 
              alt={data?.service.Name}
              width={80}
              height={80}
            />
            <p className="text-xl font-semibold text-[#3D3066]">{data?.service.Name}</p>
          </div>
          <div className="py-4">
            <p>Mobile Number</p>
            <p className=" opacity-[0.7]">{data?.customerId}</p>
          </div>

          <div className="flex gap-12">
            <div>
              <p>Data Plan</p>
              <p className="opacity-[0.7]">{data?.service.Name}</p>
            </div>
          </div>
        </div>

        <p className="text-center mt-4">
          The amount of{" "}
          <span className="font-bold">
            {currencyFormatter(data?.serviceProvider?.fee)}
          </span>{" "}
          will be debited from your wallet balance, proceed below to complete
          transaction{" "}
        </p>

        <div className="flex flex-col gap-4">
          <Button
            variant="primary"
            size="full"
            type="submit"
            isLoading={data?.isPending}
            onClick={() => completeAction()}
          >
            <span className="text-[16px]">PROCEED WITH WALLET</span>
          </Button>
        </div>
      </div>

    </div>
  );
};

export default DataPayment;
