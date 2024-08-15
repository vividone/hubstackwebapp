"use client";
import Image from "next/image";
import SortIcon from "@/assets/icons/SortIcon";
import CopyIcon from "@/assets/icons/CopyIcon";
import CaratDown from "@/assets/icons/CaratDown";
import { Button } from "@/components/common/button";
import { SearchInput } from "@/components/common/inputs";
import { TOKEN } from "@/utils/token";
import { useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

const ReferralPage = () => {
  const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);

  return (
    <div className="flex flex-col md:flex-col w-full">
      <div className="flex w-full md:w-[45%] p-[30px] md:p-[60px_25px] gap-10">
        <div className="flex-1">
          <h2 className="text-[24px] md:text-[28px] 2xl:text-[36px] font-CabinetGrotesque font-medium">
            Referral
          </h2>
          <div className="pt-[20px] md:mt-6">
            <h3 className="font-bold text-[#111111] text-[18px] md:text-[22px] font-OpenSans">
              Invite your friends & earn commissions on every transaction for
              life!
            </h3>
            <p className="font-normal text-[14px] text-[#8C8B92] mt-[30px] md:mt-[30px]">
              Get your friends and family onboard and earn rewards! Share your
              code and get bonuses when they sign up. You&apos;ll also get a 6%
              bonus on your first referral&apos;s transaction. Start sharing
              your code now!
            </p>
            <div className="w-full mt-12">
              <p className="mb-2">Your Unique Referral Code</p>
              <div className="w-full h-[66px] flex items-center justify-between border border-gray-300 rounded-[7px] p-4">
                <p className="font-normal text-[#8C8B92]">{userDetails?.referralCode}</p>
                <div className="p-2 cursor-pointer">
                  <CopyIcon width={20.31} height={20.31} />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col  gap-4 mt-12">
              <Button
                size={"full"}
                // className="text-[20px] font-bold font-CabinetGrotesk"
              >
                COPY
              </Button>
              <Button
                size={"full"}
                variant="secondary"
                className="mt-2 " //text-[20px] font-bold text-[#3D3066] font-CabinetGrotesk
              >
                SHARE WITH A FRIEND
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:mt-[60px] border-r border-[#E7E7E7]"></div>
      </div>
      <div className="w-full md:w-[100%] md:mt-[30px] ">
        <div className="flex flex-col gap-[30px] px-[30px] md:px-[25px]">
          <p className="text-[25px] font-medium">
            <span className="text-[#8C8B92] font-medium">Bronze Account </span>
            7% Per Transaction
          </p>
          <div className="flex flex-wrap gap-[12px] items-center md:gap-[24px]">
            <SearchInput
              type="text"
              className="flex-grow border-none bg-white"
              placeholder="Search"
            />
            <div className="flex items-center h-[45px] rounded-lg p-[12px] border border-[#89939F] bg-white">
              <span className="text-[12px] text-[#292D32] font-medium font-CabinetGrotesk">
                Transactions History
              </span>
              <span className="ml-2 p-[4px]  rounded bg-[#F5F8FC]">
                <CaratDown />
              </span>
            </div>
            <div className="flex items-center h-[45px] align-center gap-[5px] rounded-lg p-[12px] border border-[#89939F] bg-white">
              <span className="ml-2">
                <SortIcon />
              </span>
              <span className="text-[12px] text-[#292D32] font-medium font-CabinetGrotesk">
                Latest
              </span>
            </div>
          </div>
          <div className="w-full py-4 overflow-x-auto">
            {false ? (
              <table className="table-auto text-left w-full min-w-[500px]">
                <thead>
                  <tr className="bg-[#3D3066]/[0.1]">
                    <th className="p-[20px]">Date</th>
                    <th className="p-[20px]">Referred</th>
                    <th className="p-[20px]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="m-[200px] bg-red">
                    <td>12/7/2024</td>
                    <td>Jayson Benson</td>
                    <td>Activate</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="mt-[50px] flex flex-col gap-10 items-center ">
                <Image
                  src="/images/notransactions.svg"
                  height={167}
                  width={167}
                  alt=""
                />
                <p className="text-[32px] text-[#111111] font-medium font-cabinet-grostequeue">
                  No transactions yet
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;
