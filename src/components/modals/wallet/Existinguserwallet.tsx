"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "../../common/button";
import Link from "next/link";
import ShareIcon from "@/assets/icons/shareIcon";
import AlternateWalletFunding from "../../modals/wallet/AlternateFunding";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Input } from "../../common/inputs";
import { useFundWallet, useVerifyFund } from "@/helpers/wallet";
import ToastComponent from "../../common/toastComponent";
import Confirmation from "../confirmation";
import ClipBoard from "../../wallet/clipboard";
import NairaIcon from "@/assets/icons/nairaIcon";
import ModalsLayout from "../modalsLayout";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

interface MywalletProps {
  setShow: (show: boolean) => void;
  refreshWallet: (amount: number) => void;
}

const Mywallet: React.FC<MywalletProps> = ({ setShow, refreshWallet }) => {
  const {
    data: fundData,
    formik,
    isPending,
    isSuccess,
    isError,
    error,
  } = useFundWallet();
  const { data, formik: verify, isSuccess: isSuccessVerify } = useVerifyFund();
  const [showAlternate, setShowAlternate] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [userWallet, setUserWallet] = useLocalStorage<any>(TOKEN.WALLET);
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const [visibility, setVisibility] = useState(true);
  const [hasWallet] = useLocalStorage<any>(TOKEN.HASWALLET);
  const [content, setContent] = useState("Microbiz_MFB");

  // didnt find api endpoint for this so i just put dummy data
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (showVerify) {
      setUserWallet({
        ...userWallet,
        balance: userWallet.balance + fundData.amount,
      });
      verify.setFieldValue("transactionId", fundData._id);
      verify.handleSubmit();
      refreshWallet(userWallet.balance + fundData.amount);
    } else {
      formik.handleSubmit();
    }
  };

  const closeSuccess = () => {
    setShowVerify(false);
    setShow(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setShowVerify(true);
    }
  }, [isSuccess, showVerify])

  return (
    <ModalsLayout header="Fund Wallet" show={true} setShow={setShow} isPadded={false}>
      <ToastComponent
        isSuccess={isSuccess}
        isError={isError}
        msg={
          isSuccess
            ? "Successful! Proceed to confirm payment"
            : isError
            ? error
            : ""
        }
      />
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="">
          {!showVerify ? (
            <div className="p-[0px_40px]">
              <label
                htmlFor="desiredAmount"
                className="block text-[18px] mb-2 mt-8 font-normal"
              >
                Enter Amount
              </label>
              <Input
                leftIcon={() => <NairaIcon className="w-[18px]" />}
                name="amount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                placeholder="0.00"
              />
            </div>
          ) : (
            <div className="flex justify-between items-center w-full border-y border-[#E7E6F2]  py-5 p-[30px_40px] ">
              <div>
                <span className="block font-bold text-[#111111] text-[22px]">
                  Current Balance
                </span>
                <div className="flex items-center mt-2">
                  {visibility && (
                    <NairaIconElectricBill
                      width={26}
                      height={26}
                      className="pt-1"
                    />
                  )}
                  <span className="text-[#111111] text-[32px] font-bold font-openSans">
                    {visibility ? "2000.00" : "*****"}
                  </span>
                </div>
              </div>
              <span className="cursor-pointer pr-2 self-start">
                {visibility ? (
                  <RemoveRedEyeOutlinedIcon
                    onClick={() => setVisibility(false)}
                  />
                ) : (
                  <VisibilityOffOutlinedIcon
                    onClick={() => setVisibility(true)}
                  />
                )}
              </span>
            </div>
          )}
        </div>
        <nav className="mt-8 mb-8 p-[0_40px] ">
          <ul className="flex gap-12 border-b border-[#E7E7E7]">
            <li
              onClick={() => setContent("Microbiz_MFB")}
              className={`text-lg md:text-lg xxl:text-[25px]border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${
                content === "Microbiz_MFB"
                  ? "text-[#3D3066] font-bold border-b-[#3D3066]"
                  : "font-normal"
              }`}
            >
              <Link href="#">Microbiz MFB</Link>
            </li>
            <li
              onClick={() => setContent("Wema_Bank")}
              className={`text-lg md:text-lg xxl:text-[25px] border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${
                content === "Wema_Bank"
                  ? "text-[#3D3066] font-bold border-b-[#3D3066]"
                  : "font-normal"
              }`}
            >
              <Link href="#">Wema Bank</Link>
            </li>
            <li
              onClick={() => setContent("Paystack_Titan")}
              className={`text-lg md:text-lg xxl:text-[25px] border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${
                content === "Paystack_Titan"
                  ? "text-[#3D3066] font-bold border-b-[#3D3066]"
                  : "font-normal"
              }`}
            >
              <Link href="#">Paystack-Titan</Link>
            </li>
          </ul>
        </nav>
        <div className="mt-4 p-[0_40px]">
          <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[20px_30px]">
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
            {!showVerify && (
              <Link
                href=""
                className="flex items-center text-[#3D3066] text-[14px] mt-8 flex justify-center items-center gap-2"
              >
                <span className="font-bold"> SHARE DETAILS </span>
                <ShareIcon width={16} height={19} />
              </Link>
            )}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            {showVerify && (
              <>
                <p className="text-center -mb-4">
                  Please click the below button after a successful transfer
                </p>
                <p className="text-center">
                  Your token will be sent once we receive your payment
                </p>
              </>
            )}
            <Button
              variant="primary"
              size="long"
              type="submit"
              isLoading={isPending}
              disabled={isPending}
              // className="mt-10"
            >
              <span className="text-[16px] ">
                {!showVerify ? "CONTINUE" : "I HAVE MADE THIS TRANSFER"}
              </span>
            </Button>
          </div>
        </div>
      </form>

      <div className="flex justify-center mt-6">
        <Button
          variant="secondary"
          size="long"
          onClick={() => setShowAlternate(!showAlternate)}
        >
          <span className="text-[16px]">
            {!showVerify
              ? "USE ALTERNATE POP-UP METHOD"
              : "USE PAYSTACK INSTEAD"}
          </span>
        </Button>
      </div>
      {showAlternate && <AlternateWalletFunding setShow={setShowAlternate} />}

      {isSuccessVerify && (
        <Confirmation
          status={"success"}
          setShow={setShow}
          heading={"Fund Wallet"}
          text={"Transaction Successful"}
          subtext={"Your wallet has been credited with #" + data.amount}
          buttonProps={{ text: "THANK YOU", action: () => closeSuccess() }}
        />
      )}
    </ModalsLayout>
  );
};

export default Mywallet;
