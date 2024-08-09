import Image from "next/image";
import { TOKEN } from "@/utils/token";
import Link from "@/components/custom/link";
import ClipBoard from "../../wallet/clipboard";
import { SetStateAction, useState } from "react";
import ShareIcon from "@/assets/icons/shareIcon";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Button } from "@/components/common/button";
import ModalsLayout from "../modalsLayout";
import Mywallet from "./Existinguserwallet";
const AccountDetails = ({ setShow }: SetStateAction<any>) => {
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const [userWallet] = useLocalStorage<any>(TOKEN.WALLET);
  const [content, setContent] = useState("Microbiz_MFB");
  const [fund, setFund] = useState(false);

  const dataSets: any = {
    Microbiz_MFB: {
      currentBalance: "#0.00",
      accountNumber: userWallet?.accountNumber || "1234567890",
      accountName:
        userDetails?.firstname + " " + userDetails?.lastname || "John Doe",
      bankName: userWallet?.bankName || "Microbiz MFB",
    },
    Wema_Bank: {
      currentBalance: "#500.00",
      accountNumber: userWallet?.accountNumber || "0987654321",
      accountName:
        userDetails?.firstname + " " + userDetails?.lastname || "Jane Doe",
      bankName: userWallet?.bankName || "Wema Bank",
    },
    Paystack_Titan: {
      currentBalance: "#1000.00",
      accountNumber: userWallet?.accountNumber || "1122334455",
      accountName:
        userDetails?.firstname + " " + userDetails?.lastname || "Sam Smith",
      bankName: userWallet?.bankName || "Paystack Titan",
    },
  };

  const existingData = dataSets[content];

  return (
    <div className={`fixed top-0 left-0 w-full h-full  ${!fund ? "bg-opacity-50 bg-gray-900" : ""} z-50 flex items-center justify-end`}>
      <div
        className={`relative h-screen md:w-[40vw] sm:w-[400px] w-full bg-white overflow-y-scroll z-[1000] duration-700 ${
          !fund ? "overflow-y-scroll" : ""
        }`}
      >
        <div className="flex justify-between p-[30px_40px] pt-[55px]">
          <h3 className="text-4xl font-medium text-[#111111]">
            Account Details
          </h3>
          <button title="close button">
            <Image
              src="/images/close.svg"
              alt="closebutton"
              width={20}
              height={20}
              onClick={() => setShow(false)}
              className="cursor-pointer"
            />
          </button>
        </div>
        {!fund && (
          <>
            <nav className="mb-4 mt-12 px-[40px]">
              <ul className="flex gap-10">
                <li
                  onClick={() => setContent("Microbiz_MFB")}
                  className={`text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${
                    content === "Microbiz_MFB"
                      ? "text-[#3D3066] font-bold border-b-[#3D3066]"
                      : "font-normal"
                  }`}
                >
                  <Link href="#">Microbiz MFB</Link>
                </li>
                <li
                  onClick={() => setContent("Wema_Bank")}
                  className={`text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${
                    content === "Wema_Bank"
                      ? "text-[#3D3066] font-bold border-b-[#3D3066]"
                      : "font-normal"
                  }`}
                >
                  <Link href="#">Wema Bank</Link>
                </li>
                <li
                  onClick={() => setContent("Paystack_Titan")}
                  className={`text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${
                    content === "Paystack_Titan"
                      ? "text-[#3D3066] font-bold border-b-[#3D3066]"
                      : "font-normal"
                  }`}
                >
                  <Link href="#">Paystack-Titan</Link>
                </li>
              </ul>
            </nav>
            <div className="px-[40px]">
              <div className="p-4 bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] ">
                <div className="flex flex-col gap-4">
                  <ClipBoard
                    label={"Account Number"}
                    text={existingData.accountNumber}
                  />
                  <ClipBoard
                    label={"Account Name"}
                    text={existingData.accountName}
                  />
                  <ClipBoard label={"Bank Name"} text={existingData.bankName} />
                </div>
                <Link
                  href=""
                  className="flex items-center text-[#3D3066] text-[14px] mt-8 flex justify-center items-center gap-2"
                >
                  <span className="font-bold"> SHARE DETAILS </span>
                  <ShareIcon width={16} height={19} />
                </Link>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button size="long" onClick={() => setFund(true)}>
                <span className="text-[16px]">FUND ACCOUNT</span>
              </Button>
            </div>
          </>
        )}
        {fund && <Mywallet setShow={setShow} refreshWallet={() => {}} />}
      </div>
    </div>
  );
};

export default AccountDetails;
