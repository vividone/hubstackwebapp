export interface ICreateWalletUpdate{
    firstname:string;
    lastname: string;
    email: string;
    mobilenumber: string;
    bvn: string;
    existingAccountNumber: string,
    existingBankName: string,
}

export interface HistoryType {
    updatedAt: string;
    amount: number | string;
    transactionStatus: "successful" | "pending" | "failed"
}