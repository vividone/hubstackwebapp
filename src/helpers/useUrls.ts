export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export function useUrls() {
  // Auth endpoints
  // i did not put v1 in the base url because of these things can change
  const loginUrl = `${BASE_URL}/auth/login`;
  const signupIndividualUrl = `${BASE_URL}/auth/register-individual`;
  const signupAgentUrl = `${BASE_URL}/auth/register-agent`;
  const logOutUrl = `${BASE_URL}/auth/logout`;
  const verifyLoginUrl = `${BASE_URL}/auth/verify`;
  const resetPasswordUrl = `${BASE_URL}/auth/password-reset`;
  const resendPasswordEmailUrl = `${BASE_URL}/auth/resend-email`;

  // seat

  return {
    loginUrl,
    signupIndividualUrl,
    signupAgentUrl,
    logOutUrl,
    verifyLoginUrl,
    resetPasswordUrl,
    resendPasswordEmailUrl
  };
}
