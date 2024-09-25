export interface IUserDetails {
    _id: string,
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    phone_number: string,
    role: string,
    isVerified: true,
    createdAt: string,
    updatedAt: string,
    otp?: string | number,
    isOtpVerified: boolean,
    kyc: string | boolean,
    otpExpiry: string,
    referralCount: number,
    referralLevel: string,
    avatar: string
}

export interface IUpdateProfile {
    firstname: string;
    lastname: string;
    username: string;
    phone_number?: string;
    role?: string;
    business_name?: string;
    operation_address?: string;
    CAC_number?: string;
    location?: string;
    avatar?: string;
}

  
export interface IUpdateProfilePassword {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword?: string;
}
