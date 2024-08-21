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