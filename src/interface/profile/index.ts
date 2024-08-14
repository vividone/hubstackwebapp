
export interface IUpdateProfile {
    firstname: string;
    lastname: string;
    username: string;
    phonenumber?: string;
    role?: string;
    business_name?: string;
    superagent_username: string;
    location?: string;
    password?: string;
    confirmPassword?: string;
}

  
export interface IUpdateProfilePassword {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword?: string;
}
