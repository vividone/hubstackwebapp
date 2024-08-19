interface BillPaymentProps {
     service: { Name: string, Id: string }, customerId: string, amount: number | string 
}

export const initiateBillPayment = ( formik: any, data: BillPaymentProps ) => {
    formik.setFieldValue("service", data?.service.Name?.split(" ")[0] + " Recharge")
    formik.setFieldValue("biller", data?.service.Name)
    formik.setFieldValue("billerId", data?.service.Id?.toString())
    formik.setFieldValue("paymentMode", "wallet")
    formik.setFieldValue("customerId", data.customerId)
    formik.setFieldValue("amount", data?.amount)
    formik.setFieldValue("paymentCode", "0488051528")
    formik.setFieldValue("category", "billpayment")

    formik.handleSubmit()
}

export const completeBillPayment = (formData: any, completedForm: any, userDetails: any) => {
    completedForm.setValues({ 
        paymentCode: formData?.transaction?.transactionDetails.paymentCode?.toString(), 
        customerId: formData?.transaction?.transactionDetails.customerId?.toString(), 
        customerEmail: userDetails?.email,
        customerMobile: userDetails?.phone_number || "09012345678",
        requestReference: formData?.transaction?.transactionReference, 
        amount: formData?.transaction?.amount
    })

    completedForm.handleSubmit()
}