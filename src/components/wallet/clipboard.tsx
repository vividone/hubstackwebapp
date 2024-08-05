'use c;ient'
import Image from "next/image";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export default function ClipBoard({ text, label }: {text: string, label: string}) {
    const [copiedText, setCopiedText] = useState("");

    const handleCopy = (text: string) => {
        setCopiedText(text);
        setTimeout(() => setCopiedText(""), 2000);
    };

    return (
        <div className="flex justify-between gap-5">
            <div className="">
            <span className="block text-[12px]">{label}</span>
            <CopyToClipboard text={text} onCopy={() => handleCopy(text)}>
                <span className="block font-bold text-[18px] cursor-pointer">{text}</span>
            </CopyToClipboard>
            </div>
            <div className="pt-1">
            <CopyToClipboard text={text} onCopy={() => handleCopy(text)}>
                <Image
                src="/images/copylogo.svg"
                alt="copylogo"
                height={20}
                width={20}
                className="cursor-pointer"
                onClick={() => handleCopy(text)}
                />
            </CopyToClipboard>
            </div>
            
            {copiedText && <div className="fixed bottom-4 right-4 p-2 bg-[#3D3066] text-white">Copied: {copiedText}</div>}
        </div>
    )
}