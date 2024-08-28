'use client'
import NairaIcon from "@/assets/icons/nairaIcon"
import { useEffect, useState } from "react"
import Pagination from "./pagination"
import { dateConvert } from "@/helpers/dateConvert"
import { currencyFormatter } from "@/helpers/currencyConvert"
import HistoryModal from "../modals/historyModal"

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
                            <th key={i} className="p-[20px]">{header}</th>
                        ))
                    }
                    </tr>
                </thead>
                <tbody className="">
                    {
                    reversedHistory?.slice(page*6, (page*6) + 6).map((item: any) => (
                        <tr key={item._id}  tabIndex={1} onKeyUp={(e) => {e.key === "Enter" ? handleOpenModal(item) : {}}} onClick={() => handleOpenModal(item)}>
                            {
                                fields.map((header: string, i:number) => (
                                    <td key={i} className="p-[20px] cursor-pointer">{
                                        header === "Date" ? dateConvert(item?.updatedAt)
                                        :
                                        header === "Amount" ? currencyFormatter(item?.amount*100)
                                        :
                                        header === "Status" ? <span  className={`capitalize ${item.transactionStatus === "successful" ? "text-[#2EB62C]" : item.transactionStatus === "pending" ? "text-[#FFCC00]" : item.transactionStatus === "failed" ? "text-[#FF0E0E]" : ""}`}>{item?.transactionStatus}</span>
                                        : 
                                        header === "Biller" ? item?.transactionDetails.biller
                                        :
                                        ""
                                    }</td>
                                ))
                            }
                        </tr>
                    ))
                    }

                </tbody>
            </table>

            {
                openModal &&
                <HistoryModal setShow={setOpenModal} show={openModal} transaction={active} />
            }

            <div className="py-6">
            {
                history.length < 10 ?
                ""
                :
                <Pagination total={history.length} page={page} setPage={setPage} />
            }
            </div>
        </div>
    )
}