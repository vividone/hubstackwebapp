import ModalsLayout from "./modalsLayout";
import { currencyFormatter } from "@/helpers/currencyConvert";
import { Button } from "../common/button";
import { usePDF } from "react-to-pdf";

type HistoryModalProps = {
    setShow: (aug0: boolean) => void;
    show: boolean;
    transaction: any;
}

export default function HistoryModal({ setShow, show, transaction }: HistoryModalProps) {
    const { toPDF, targetRef } = usePDF({filename: `receipt.pdf`})

    return (
    <ModalsLayout header={"Transaction Details"} flow={0} setFlow={() => {}} setShow={setShow} show={show}>
        <div ref={targetRef} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 p-4 rounded bg-[#E6FBFF]">
                
                <div className="flex justify-between items-center print:flex print:justify-betwwen">
                    <h4>Transaction Reference</h4>
                    <p className="font-bold">{transaction.transactionReference}</p>
                </div>
                <div className="flex justify-between items-center">
                    <h4>Status</h4>
                    <p  className={`capitalize ${transaction.transactionStatus === "successful" ? "text-[#2EB62C]" : transaction.transactionStatus === "pending" ? "text-[#FFCC00]" : transaction.transactionStatus === "failed" ? "text-[#FF0E0E]" : ""}`}>{transaction.transactionStatus}</p>
                </div>
                <div className="flex justify-between items-center">
                    <h4>Date</h4>
                    <p className="font-bold">{new Date(transaction?.createdAt).toLocaleDateString("en-GB")}</p>
                </div>
                <div className="flex justify-between items-center">
                    <h4>Time</h4>
                    <p className="font-bold">{new Date(transaction?.createdAt).toLocaleTimeString()}</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 p-4 rounded border border-[#E6FBFF]">
                <h2 className="font-bold">DETAILS</h2>
                {
                    transaction.transactionType === "billpayment" &&
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <h4>Biller</h4>
                            <p className="capitalize">{transaction.transactionDetails.biller}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h4>Service</h4>
                            <p className="capitalize">{transaction.transactionDetails.service}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h4>Customer ID</h4>
                            <p className="">{transaction.transactionDetails.customerId}</p>
                        </div>
                    </div>
                }
                <div className="flex justify-between items-center">
                    <h4>Amount</h4>
                    <p className="">{currencyFormatter(transaction.transactionDetails.amount || transaction?.amount)}</p>
                </div>
                <div className="flex justify-between items-center">
                    <h4>Payment Mode</h4>
                    <p className="capitalize">{transaction.transactionDetails.paymentMode}</p>
                </div>
            </div>

            <Button size="full" className="uppercase" onClick={() => toPDF()}>Download Receipt</Button>
        </div>
    </ModalsLayout>
    )
}