'use client'
import { useState } from "react"
import { formatAmount } from "@/helpers/amountFormatter"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useGetAccountBalance } from "@/helpers/wallet";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";

export default function CurrentBalance() {
    const [visibility, setVisibility ] = useState(false)
    const { walletBalance } = useGetAccountBalance();


    return (
        <div className="py-4">
            <div className="flex justify-between">
              <div>
                <span className="block font-bold text-[#111111] text-[24px]">Current Balance</span>
                <span className="block text-[#3D3066] text-[32px]  font-bold font-openSans">
                  {visibility ? <div className="flex items-center"><NairaIconElectricBill width={32} />{formatAmount(walletBalance?.balance)}</div> : "********"}
                </span>
              </div>
              <div>
                <span className="cursor-pointer">
                  {visibility ? (
                    <RemoveRedEyeOutlinedIcon onClick={() => setVisibility(false)} />
                  ) : (
                    <VisibilityOffOutlinedIcon onClick={() => setVisibility(true)} />
                  )}
                </span>
              </div>
            </div>
            
          </div>
    )
}