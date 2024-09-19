'use client'
import ModalsLayout from "./modalsLayout";
import { Button } from "../common/button";
import Image from "next/image";
import { useState } from "react";

type HistoryModalProps = {
    setShow: (aug0: boolean) => void;
    show: boolean;
    initialAvatar?: string;
    selectAvatar: (avatar: string) => void
}

export default function ChangeAvatarModal({ setShow, show, initialAvatar, selectAvatar }: HistoryModalProps) {
    const [userAvatar, setUserAvatar] = useState<string>(initialAvatar || "")


    return (
    <ModalsLayout header={"Change Avatar"} flow={0} setFlow={() => {}} setShow={setShow} show={show}>
        <div className="flex flex-col gap-4">

            <div className="grid grid-cols-4 gap-4 p-4 my-6 rounded border border-[#E6FBFF]">
                {
                    [
                        { id: 0, src: "F1" },
                        { id: 1, src: "F2" },
                        { id: 2, src: "F3" },
                        { id: 3, src: "F4" },
                        { id: 4, src: "F5" },
                        { id: 5, src: "M1" },
                        { id: 6, src: "M2" },
                        { id: 7, src: "M3" },
                        { id: 8, src: "M4" },
                        { id: 9, src: "M5" },
                    ].map(avatar => (
                        <button key={avatar.id} className={`w-full py-2 flex justify-center rounded-[10px] ${avatar.src === userAvatar ? "border-2 border-blue-700 bg-[#65C9FF]" : ""}`} onClick={() => setUserAvatar(avatar.src)}>
                            <Image src={`/avatars/${avatar.src}.svg`} alt={avatar.src} width={100} height={100} />
                        </button>
                    ))
                }
            </div>

            <Button size="full" className="uppercase" onClick={() => {selectAvatar(userAvatar); setShow(false)}}>continue</Button>
        </div>
    </ModalsLayout>
    )
}