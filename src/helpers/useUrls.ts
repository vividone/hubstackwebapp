export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export function useUrls() {
  // Auth endpoints
  // i did not put v1 in the base url because of these things can change
  const loginUrl = `${BASE_URL}/auth/login`;
  const signupUrl = `${BASE_URL}/auth/register`;
  const logOutUrl = `${BASE_URL}/auth/logout`;

  // seat

  return {
    loginUrl,
    signupUrl,
    logOutUrl
  };
}
