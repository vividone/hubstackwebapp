export interface IAuthLogin {
  email: string;
  phoneNumber: string;
}

export interface IAuthIndividualSignup {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface IAuthAgentSignup {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  role?: string;
  companyName: string;
  superAgent: string;
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