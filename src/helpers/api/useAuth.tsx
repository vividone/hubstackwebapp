import axiosInstance from "@/helpers/axiosConfig";
import { useUrls } from "@/helpers/useUrls";
import { useCookies } from "@/hooks/useCookies";
import useLocalStorage from "@/hooks/useLocalStorage";
import useSessionStorage from "@/hooks/useSessionStorage";
import {
    IAuthLogin,
    IAuthAgentSignup,
    IVerifyLogin,
    IAuthSignupIndividual
  } from "@/interface/auth";
import { IErrorResponseType } from "@/interface/common/error";
import {
    LoginSchema,
    ResetPasswordSchema,
    SetPasswordSchema,
    SignupSchemaAgent,
    SignupSchemaIndividual,
    VerifyLoginSchema
  } from "@/schema/auth";
  import { FRONTEND_URL } from "@/utils/pages";
import { TOKEN } from "@/utils/token";
  import { useMutation } from "@tanstack/react-query";
  import { useFormik } from "formik";
  import { useRouter } from "next/navigation";


// login for agent and individual
export const useLogin = () => {
    const router = useRouter();
    const { loginUrl } = useUrls();
    const { setCookie } = useCookies();
    const [, setUserToken] = useSessionStorage<string>(TOKEN.USER, "");
    const [, setUserDetails] = useLocalStorage<any>(TOKEN.EMAIL); // to persist
    const [hasWallet,setHasWallet] = useLocalStorage<any>(TOKEN.HASWALLET)
    const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["login"],
        mutationFn: (payload: Partial<IAuthLogin>) => {
          return axiosInstance.post(loginUrl, payload)
        },
    })    
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      } as IAuthLogin,
      validateOnBlur: false,
      validateOnChange: false,
      validationSchema: LoginSchema,
      onSubmit: async ({ ...values }) => {
        try {
          await formik.validateForm();
          mutate({ email: values.email, password: values.password }, {
            onSuccess: (res) => {
              setCookie(TOKEN.ACCESS, res.data.token.access_token);
              setHasWallet(res.data.hasWallet)
              setUserDetails(res.data.data);
              if(!res.data.data.isVerified) {
                setUserToken(values.email);
                router.push(FRONTEND_URL.VERIFY_ACCOUNT);
              }
              else {
                router.push(FRONTEND_URL.DASHBOARD);
              }

            },
            onError: (res: any) => {
              
            },
          });
          formik.handleReset;
        } catch (error: any) {
          throw new Error(error);
        }
      },
    });
    const typedError = error as IErrorResponseType;
    const errorString = Array.isArray(typedError?.response?.data?.message || typedError?.response?.data?.error)
      ? typedError?.response?.data?.message[0] || typedError?.response?.data?.error[0]
      : typedError?.response?.data?.message  || typedError?.response?.data?.error || "";
    return { formik, isPending, isSuccess, isError, error: errorString };
};

export const useSignupIndividual = () => {
  const router = useRouter();
  const { signupIndividualUrl } = useUrls();
  const [, setUserToken] = useSessionStorage<string>(TOKEN.USER, "");
  const [, setUserDetails] = useLocalStorage<string>(TOKEN.EMAIL); // to persist

  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["sign up individual"],
    mutationFn: (payload: Partial<IAuthSignupIndividual>) => {
      return axiosInstance.post(signupIndividualUrl, payload)
    },
  })  

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone_number: "",
      role: "Individual",
      password: "",
      referralCode: "",
    } as IAuthSignupIndividual,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: SignupSchemaIndividual,
    onSubmit: async ({ ...values }) => {
      try {
        await formik.validateForm();
        mutate({...values, email: values.email.trim()}, {
          onSuccess: (res) => {
            setUserToken(values.email);
            setUserDetails(res.data.data);
            router.push(FRONTEND_URL.VERIFY_ACCOUNT);
          },
          onError: (res: any) => {

          },
        });
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return { formik, isPending, isSuccess, isError, error: errorString };
}
  

export const useSignupAgent = () => {
  const router = useRouter();
  const { signupAgentUrl } = useUrls();
  const [, setUserToken] = useSessionStorage<string>(TOKEN.USER, "");
  const [, setUserDetails] = useLocalStorage<string>(TOKEN.EMAIL); // to persist

  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["sign up agent"],
    mutationFn: (payload: Partial<IAuthAgentSignup>) => {
      return axiosInstance.post(signupAgentUrl, payload)
    },
  })  

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone_number: "",
      role: "Agent",
      password: "",
      referralCode: "",
      business_name: "",
      location: "",
      region: ""
    } as IAuthAgentSignup,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: SignupSchemaAgent,
    onSubmit: async ({ ...values }) => {
      try {
        await formik.validateForm();
        mutate({...values, email: values.email.trim()}, {
          onSuccess: (res) => {
            setUserToken(values.email);
            setUserDetails(res.data.agentUser);
            router.push(FRONTEND_URL.VERIFY_ACCOUNT);
          },
          onError: (res: any) => {

          },
        });
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return { formik, isPending, isSuccess, isError, error: errorString };
}
  

// verifyLogin
export const useVerifyLogin = (type: string) => {
  const router = useRouter();
  const { verifyOTPUrl, verifyEmailUrl } = useUrls();
  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["verify account"],
      mutationFn: (payload: Partial<IVerifyLogin>) => {
        return axiosInstance.post(type === "email" ? verifyEmailUrl : verifyOTPUrl, payload)
      },
  })  

  const formik = useFormik({
    initialValues: {
      otp: "",
    } as IVerifyLogin,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: VerifyLoginSchema,
    onSubmit: async ({ ...values }) => {
      try {
        mutate(
          {
            otp: values.otp
          },
          {
            onSuccess: () => {
              router.push(FRONTEND_URL.LOGIN);
            },
            // onError: (res: any) => {
              
            // },
          }
        );
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return { formik, isPending, isSuccess, isError, error: errorString };
};

//Resend OTP
export const useResendOTP = (email: string) => {
  const { resendOTPUrl } = useUrls();

  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["resend OTP"],
    mutationFn: (payload: Partial<{email: string}>) => {
      return axiosInstance.post(resendOTPUrl, payload)
    },
})  

  const formik = useFormik({
    initialValues: {
      email,
    } as { email: string },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: ResetPasswordSchema,
    onSubmit: async () => {
      try {
        mutate(
          {
            email,
          },
          {
            onSuccess: () => {
            },
            onError: (res: any) => {
                          
            },
          }
        );
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return { formik, isPending, isSuccess, isError, error: errorString };

}

// Password reset
export const useForgotPassword = () => {
  const router = useRouter();
  const { forgotPasswordUrl } = useUrls();
  const [, setUserToken] = useSessionStorage<string>(TOKEN.USER, "");
  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["reset password"],
      mutationFn: (payload: Partial<{email: string}>) => {
        return axiosInstance.post(forgotPasswordUrl, payload)
      },
  })  

  const formik = useFormik({
    initialValues: {
      email: "",
    } as { email: string },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: ResetPasswordSchema,
    onSubmit: async ({ ...values }) => {
      try {
        mutate(
          {
            email: values.email,
          },
          {
            onSuccess: () => {
              setUserToken(values.email);
              router.push(FRONTEND_URL.RESET_CONFIRMATION)
            },
            onError: (res: any) => {
                           
            },
          }
        );
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return { formik, isPending, isSuccess, isError, error: errorString };
};



// set new password
export const useResetPassword = (token: string | null) => {
  const router = useRouter();
  const { resetPasswordUrl } = useUrls();
  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["set password"],
      mutationFn: (payload: Partial<{ password: string, confirmNewPassword: string }>) => {
        return axiosInstance.post(resetPasswordUrl + "/" + token, payload)
      },
  })  

  const formik = useFormik({
    initialValues: {
      password: "", 
      confirmNewPassword: ""
    } as { password: string, confirmNewPassword: string },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: SetPasswordSchema,
    onSubmit: async ({ confirmNewPassword, ...values }) => {
      try {
        mutate(
          {
            password: values.password,
          },
          {
            onSuccess: () => {
              
            }
            //   onError: (res: any) => {

            //   },
          }
        );
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return { formik, isPending, isSuccess, isError, error: errorString };
};


// verifyLogin
export const useVerifyResetPassword = () => {
  const router = useRouter();
  const { verifyOTPUrl } = useUrls();
  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["verify reset password account"],
      mutationFn: (payload: Partial<IVerifyLogin>) => {
        return axiosInstance.post(verifyOTPUrl, payload)
      },
  })  

  const formik = useFormik({
    initialValues: {
      otp: "",
      // email: "",
    } as IVerifyLogin,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: VerifyLoginSchema,
    onSubmit: async ({ ...values }) => {
      try {
        mutate(
          {
            otp: values.otp,
            // email: values.email,
          },
          {
            onSuccess: (res) => {
              router.push(FRONTEND_URL.NEW_PASSWORD + "/?token=" + res.data.token);
            },
            // onError: (res: any) => {
              
            // },
          }
        );
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return { formik, isPending, isSuccess, isError, error: errorString };
};