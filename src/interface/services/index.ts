export interface IElectricBill{
    biller: string,
    billerId: string,
    paymentCode: string,
    paymentMode: string,
    customerId: string,
    amount: string,
    category: string
}

export interface IServicesData {
    amount: number;
    transactionReference: string;
    transactionType: string;
    transactionStatus: string;
    transactionDetails: IElectricBill;
    user: string;
} 