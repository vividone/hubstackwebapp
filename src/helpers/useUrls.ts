export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export function useUrls() {
  // Auth endpoints
  const loginUrl = `${BASE_URL}/auth/login`;
  const signupIndividualUrl = `${BASE_URL}/auth/register-individual`;
  const signupAgentUrl = `${BASE_URL}/auth/register-agent`;
  const logOutUrl = `${BASE_URL}/auth/logout`;
  const verifyEmailUrl = `${BASE_URL}/auth/verify-email`;
  const verifyOTPUrl = `${BASE_URL}/auth/verify-otp`;
  const resetPasswordUrl = `${BASE_URL}/auth/reset-password`;
  const forgotPasswordUrl = `${BASE_URL}/auth/forgot-password`;
  const resendOTPUrl = `${BASE_URL}/auth/resend-otp`;

  // wallet
  const createWalletUrl = `${BASE_URL}/wallet/create-wallet`
  const getUserWallet = `${BASE_URL}/wallet/accounts`
  const walletCheck = `${BASE_URL}/users/wallet-check`
  const getAllWallets = `${BASE_URL}/wallet/sub-accounts`
  const getWalletBalance = `${BASE_URL}/wallet`
  const getAllBanks = `${BASE_URL}/wallet/banks`
  const fundWallet = `${BASE_URL}/wallet/fund-wallet/initialize`
  const verifyFunding = `${BASE_URL}/wallet/fund-wallet/verify`
  const getWalletHistory = `${BASE_URL}/transact`

  // categories
  const getBillPaymentsUrl = `${BASE_URL}/categories/billpayments`
  const getBillersByCategoryUrl = `${BASE_URL}/categories/billers`
  const getServicessByBillerUrl = `${BASE_URL}/categories/billers/services/`

  // services payment
  const payBillUrl = `${BASE_URL}/transact`

  // Update profile 
  const updateIndividualProfileUrl = `${BASE_URL}/users/update-profile`;
  const updateAgentProfileUrl = `${BASE_URL}/agent/update-profile`;
  const updatePasswordUrl = `${BASE_URL}/auth/update-password`;
  const getUserUrl = `${BASE_URL}/users/user`;

  //transactions
  const getTransactionsHistory = `${BASE_URL}/transact/`


  return {
    loginUrl,
    signupIndividualUrl,
    signupAgentUrl,
    logOutUrl,
    verifyOTPUrl,
    verifyEmailUrl,
    resetPasswordUrl,
    forgotPasswordUrl,
    resendOTPUrl,
    updateIndividualProfileUrl,
    updateAgentProfileUrl,
    updatePasswordUrl,
    createWalletUrl ,
    walletCheck,
    getUserWallet,
    getAllWallets,
    getWalletBalance,
    getAllBanks,
    fundWallet,
    verifyFunding,
    getWalletHistory,
    getBillPaymentsUrl,
    getBillersByCategoryUrl,
    getServicessByBillerUrl,
    payBillUrl,
    getTransactionsHistory,
    getUserUrl,
  };

}
