'use client'
import { useState } from "react"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useGetAccountBalance } from "@/helpers/api/useWallet";
import { currencyFormatter } from "@/helpers/currencyConvert";

export default function CurrentBalance() {
    const [visibility, setVisibility ] = useState(false)
    const { walletBalance } = useGetAccountBalance();


    return (
        <div className="py-4">
            <div className="flex justify-between">
              <div>
                <span className="block font-bold text-[#111111] text-[24px] mb-2">Current Balance</span>
                <span className="block text-[#3D3066] text-[32px]  font-bold font-openSans">
                  {visibility ? <div className="flex items-center">{currencyFormatter(walletBalance?.balance * 100)}</div> : "********"}
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