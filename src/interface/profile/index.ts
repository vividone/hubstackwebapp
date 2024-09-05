
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
}

  
export interface IUpdateProfilePassword {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword?: string;
}
