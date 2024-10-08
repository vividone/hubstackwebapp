import { Button } from "@/components/common/button";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { useEffect } from "react";
import { PaystackButton } from "react-paystack";

type PaystackPaymentProps = {
    amount: number;
    setFlow: (aug0: number) => void;
    refreshWallet?: (aug0: number) => void;
    complete?: any;
}

export default function PaystackPayment({ amount, setFlow, refreshWallet, complete }: PaystackPaymentProps) {
    const [userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL)

    const componentProps = {
        email: userDetails?.email,
        amount: amount * 100,
        metadata: {
          custom_fields: [],
          name: userDetails?.firstname,
          phone: userDetails?.phone_number,
        },
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
        onSuccess: (ref: any) => {
            setFlow(3)
            refreshWallet ? refreshWallet(amount): ""
            complete(ref)
        },
        onClose: () => {},
    }

    return (
        <div>
            <PaystackButton {...componentProps} className="w-full">
                <Button size="full">
                    <span className="text-[16px] uppercase">Pay with paystack</span>
                </Button>
            </PaystackButton>
        </div>
    )
}