import { Button } from "@/components/common/button";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { useEffect } from "react";
import { PaystackButton } from "react-paystack";

type PaystackPaymentProps = {
    amount: number;
    setFlow: (aug0: string) => void;
    refreshWallet: (aug0: number) => void;
}

export default function PaystackPayment({ amount, setFlow, refreshWallet }: PaystackPaymentProps) {
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
            setFlow("success")
            refreshWallet(amount)
            console.log(ref)
        },
        onClose: () => {},
    }

    useEffect(() => {
        console.log(window)
    }, [])

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