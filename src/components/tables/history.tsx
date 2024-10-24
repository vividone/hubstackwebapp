'use client'
import { useEffect, useState } from "react"
import Pagination from "./pagination"
import { currencyFormatter } from "@/helpers/currencyConvert"
import HistoryModal from "../modals/historyModal"
import { Button } from "../common/button"

export function History({ history, fields }: any) {
    const [page, setPage] = useState(0)
    const [reversedHistory, setReversedHistory] = useState<any>([])
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [active, setActive] = useState({})

    useEffect(() => {
        const reversedArray = []

        for (let i=history.length-1; i>=0; i--) {
            reversedArray.push(history[i])
        }

        setReversedHistory(reversedArray);
    }, [history])

    const handleOpenModal = (item: any) => {
        setOpenModal(!openModal) 
        setActive(item)
    }

    return (
        <div className="w-full py-2 overflow-x-auto">
            <table className="table-auto text-left w-full min-w-[500px]">
                <thead>
                    <tr className="bg-[#3D3066]/[0.1]">
                    {
                        fields.map((header: string, i:number) => (
                            <th key={i} className="p-[20px]">{header === "Biller" ? "Transaction" : header}</th>
                        ))
                    }
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                    reversedHistory?.slice(page*6, (page*6) + 6).map((item: any) => (
                        <tr key={item._id}  tabIndex={1} onKeyUp={(e) => {e.key === "Enter" ? handleOpenModal(item) : {}}} onClick={() => handleOpenModal(item)}>
                            {
                                fields.map((header: string, i:number) => (
                                    <td key={i} className="p-[20px] cursor-pointer">{
                                        header === "Date" ? new Date(item?.createdAt).toLocaleDateString("en-GB")
                                        :
                                        header === "Time" ? new Date(item?.createdAt).toLocaleTimeString("en-GB")
                                        :
                                        header === "Amount" ? currencyFormatter(item?.amount)
                                        :
                                        header === "Status" ? <span  className={`capitalize ${item?.transactionStatus === "successful" || item?.transactionStatus === "Funded" ? "text-[#2EB62C]" : item?.transactionStatus === "pending" ? "text-[#FFCC00]" : item?.transactionStatus === "failed" ? "text-[#FF0E0E]" : ""}`}>{item?.transactionStatus}</span>
                                        : 
                                        header === "Biller" ? item?.transactionDetails?.biller
                                        :
                                        ""
                                    }</td>
                                ))
                            }
                            <td className=""><Button className="w-[90px] flex items-center border-gray-200" size="sm" variant="special" onClick={() => handleOpenModal(item)}>Details</Button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            {
                openModal &&
                <HistoryModal setShow={setOpenModal} show={openModal} transaction={active} />
            }

            <div className="py-6 w-[30%] mx-auto">
            {
                history.length < 7 ?
                ""
                :
                <Pagination total={Math.floor(history.length/6 + 1)} page={page + 1} setPage={(value) => setPage(value-1)} />
            }
            </div>
        </div>
    )
}