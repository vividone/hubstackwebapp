'use client'
import NairaIcon from "@/assets/icons/nairaIcon"
import { useEffect, useState } from "react"
import Pagination from "./pagination"
import { dateConvert } from "@/helpers/dateConvert"


// type history = { 
//     _id: string, 
//     updatedAt: string, 
//     amount: number, 
//     transactionType: string, 
//     transactionStatus: string 
// }[]

export function History({ history }: any) {
    const [page, setPage] = useState(0)
    const [reversedHistory, setReversedHistory] = useState<any>([])

    useEffect(() => {
        const reversedArray = []

        for (let i=history.length-1; i>=0; i--) {
            reversedArray.push(history[i])
        }

        setReversedHistory(reversedArray);
    }, [history])

    return (
        <div className="w-full py-2 overflow-x-auto">
            <table className="table-auto text-left w-full min-w-[700px]">
                <thead>
                    <tr className="bg-[#3D3066]/[0.1]">
                        <th className="p-[20px]">Date</th>
                        <th className="p-[20px]">Amount</th>
                        <th className="p-[20px]">Status</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                    reversedHistory?.slice(page*6, (page*6) + 6).map((item: any) => (
                        <tr key={item._id} className="">
                            <td className="p-[20px]">{dateConvert(item?.updatedAt)}</td>
                            <td className="p-[20px] flex items-center gap-1"><NairaIcon className="w-[12px]" />{item?.amount}</td>
                            <td className={`p-[20px] capitalize ${item.transactionStatus === "successful" ? "text-[#2EB62C]" : item.transactionStatus === "pending" ? "text-[#FFCC00]" : item.transactionStatus === "failed" ? "text-[#FF0E0E]" : ""}`}>{item?.transactionStatus}</td>
                        </tr>
                    ))
                    }

                </tbody>
            </table>

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