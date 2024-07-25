export interface IAuthLogin {
  email: string;
  password: string;
}

export interface IAuthIndividualSignup {
  firstname: string;
  lastname: string;
  referralCode: string;
  email: string;
  phone_number: string;
  role?: string;
  password: string;
}

export interface IAuthAgentSignup {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  role?: string;
  business_name: string;
  location: string;
  region: string;
  password: string;
  username: string;
  referralCode: string;
}

export interface IAuthSuperAgentSignup {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  location: string;
  password: string;
}

export interface IVerifyLogin {
  email?: string;
  otp?: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  email: string;
  otp: string;
  password: string;
  confirmPassword?: string;
}