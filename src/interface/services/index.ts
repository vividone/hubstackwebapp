export interface IBillData{
    biller: string,
    billerId: string,
    paymentCode: string,
    paymentMode: string,
    customerId: string,
    amount: number,
    category: string
}

export interface IServicesData {
    amount: number;
    transaction?: any;
    transactionReference: string;
    transactionType: string;
    transactionStatus: string;
    transactionDetails: IBillData;
    user: string;
    _id: string;
} 

export interface ICompleteBill {
    paymentCode: string, 
    customerId: string, 
    customerEmail: string,
    customerMobile: string,
    requestReference: string, 
    amount: number
}