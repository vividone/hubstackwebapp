export interface IAuthInput {
  username: string;
  password: string;
  phoneNumber: string;
  confirmPassword?: string;
}

export interface IAuthSignup {
  email: string;
  password: string;
  confirmPassword: string; // would not make it to the endpoint
  phoneNumber: string;
  roles: string;
  //optional below
  firstName?: string;
  lastName?: string;
  companyName?: string;
  industry?: string;
}

export interface IUserSignup {
  address?: string;
  incorporationNumber?: string;
  // phoneNumber: string;
  linkedin?: string;
  twitter?: string;
  country?: string;
  state?: string;
  city?: string;
  value?: string;
  bio?: string;
  universityAttended?: string;
  qualification?: string;
  currentOrganization?: string;
  organization?: [
    {
      startDate: string;
      endDate: string;
      name: string;
    }
  ];
  completeProfile?: boolean;
}

export interface IuserCompleteProfile {
  bio?: string;
  educationHistory?: [
    {
      institution?: string;
      endDate?: string;
      startDate?: string;
      qualificationObtained?: string;
    }
  ];
  linkedin?: string;
  twitter?: string;
}

export interface IuserSecondForm {
  industry?: string;
  workExperience?: [
    {
      startDate: string;
      endDate: string;
      employmentStatus: string;
      orgName: string;
      jobRole: string;
    }
  ];
  areaOfExpertise?: [string];
  yearsOfExperience?: string;
  testimonial?: string;
  completeProfile?: boolean;
}

export interface IuserPersonalFirstForm {
  bio?: string;
  department?: string;
  currentRole?: string;
  jobLevel?: string;
  qualification?: string;
  linkedin?: string;
  twitter?: string;
  interestedSkills?: [string];
  interestedPathways?: [string];
  // completeProfile?: boolean;
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

export interface IUserDetails {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  isVerified: boolean;
  tenderEmailVerified: boolean;
  tenderPhoneNumberVerified: boolean;
}
