export const currencyFormatter = (formatted_value: any) => {
    if (!Number(formatted_value)) return "0.00";
    const br: Intl.NumberFormatOptions | undefined = { style: "currency", currency: "NGN" };
    return new Intl.NumberFormat("en-NG", br).format(formatted_value);
};