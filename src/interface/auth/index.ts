export interface IAuthLogin {
  email: string;
  password: string;
}

export interface IAuthIndividualSignup {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  role?: string;
  password: string;
}

export interface IAuthAgentSignup {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  role?: string;
  company_name: string;
  super_agent: string;
  location: string;
  password: string;
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