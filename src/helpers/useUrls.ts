export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export function useUrls() {
  // Auth endpoints
  const loginUrl = `${BASE_URL}/auth/login`;
  const signupIndividualUrl = `${BASE_URL}/auth/register-individual`;
  const signupAgentUrl = `${BASE_URL}/auth/register-agent`;
  const logOutUrl = `${BASE_URL}/auth/logout`;
  const verifyLoginUrl = `${BASE_URL}/auth/verify-otp`;
  const resetPasswordUrl = `${BASE_URL}/auth/reset-password`;
  const forgotPasswordUrl = `${BASE_URL}/auth/forgot-password`;
  const resendPasswordEmailUrl = `${BASE_URL}/auth/resend-email`;

  // create wallet
  const createWalletUrl = `${BASE_URL}/mockwallet/create-and-validate-customer`
  const walletCheck = `${BASE_URL}/users/wallet-check`
  const getAllWallets = `${BASE_URL}/wallet/sub-accounts`
  const getWalletBalance = `${BASE_URL}/wallet/account-balance/`
  const getAllBanks = `${BASE_URL}/wallet/banks`

  // Update profile 
  const updateIndividualProfileUrl = `${BASE_URL}/users/update-profile`;
  const updateAgentProfileUrl = `${BASE_URL}/agent/update-profile`;

  // seat

  return {
    loginUrl,
    signupIndividualUrl,
    signupAgentUrl,
    logOutUrl,
    verifyLoginUrl,
    resetPasswordUrl,
    forgotPasswordUrl,
    resendPasswordEmailUrl,
    updateIndividualProfileUrl,
    updateAgentProfileUrl,
    createWalletUrl ,
    walletCheck,
    getAllWallets,
    getWalletBalance,
    getAllBanks
  };

}
