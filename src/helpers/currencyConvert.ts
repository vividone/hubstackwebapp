export const currencyFormatter = (formatted_value: any) => {
    // Set to 0,00 when "" and divide by 100 to start by the cents when start typing
    if (!Number(formatted_value)) return "0.00";
    const br: Intl.NumberFormatOptions | undefined = { style: "currency", currency: "NGN" };
    return new Intl.NumberFormat("en-NG", br).format(formatted_value / 100);
};