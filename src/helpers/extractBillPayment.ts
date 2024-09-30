export const extractBillPayment = (category: string | number, billers: { BillerList: { Category: [{ Billers: [] }] }} ) => {
    let data =  billers?.BillerList?.Category?.filter((item: any) => item.Id === category)[0]?.Billers

    if(data) {
        return data as []
    }
    else {
        return [] as []
    }
}