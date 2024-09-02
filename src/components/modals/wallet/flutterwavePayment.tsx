"use client"
import { Button } from "@/components/common/button";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

type FlutterwavePaymentProps = {
    amount: number;
    setFlow: (aug0: string) => void;
    refreshWallet?: (aug0: number) => void;
    complete?: any
}

export default function FlutterwavePayment({ amount, setFlow, refreshWallet, complete }: FlutterwavePaymentProps) {
    const [userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL)

    const config = {
        public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY || "",
        tx_ref: Date.now().toString(),
        amount: amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: userDetails?.email,
            phone_number: userDetails?.phone_number,
            name: userDetails?.firstname,
        },
        customizations: {
            title: 'Fund wallet',
            description: 'Payment forwallet funding',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        }
    }
    
    const handleFlutterPayment = useFlutterwave(config)

    return (
        <div>
            <Button
                onClick={() => {
                handleFlutterPayment({
                    callback: (response) => {
                        complete(response);
                        refreshWallet ? refreshWallet(amount): ""
                        setFlow("success")
                        closePaymentModal() // this will close the modal programmatically
                    },
                    onClose: () => {},
                });
                }}
            >PAY WITH FLUTTERWAVE</Button>
        </div>
    )
}