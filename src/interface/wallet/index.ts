export interface ICreateWalletUpdate{
    firstname:string;
    lastname: string;
    email: string;
    mobilenumber: string;
    bvn: string;
    existingAccountNumber: string,
    existingBankName: string,
}

export interface IFundWallet {
    email: string,
    amount: string,
    paymentMode: string,
}