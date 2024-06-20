import axiosInstance from "@/helpers/axiosConfig";
import { useUrls } from "@/helpers/useUrls";
import useLocalStorage from "@/hooks/useLocalStorage";
import {
    IAuthLogin,
    IAuthIndividualSignup,
    IAuthAgentSignup,
    IAuthSuperAgentSignup
  } from "@/interface/auth";
import { IErrorResponseType } from "@/interface/common/error";
import {
    LoginSchema,
    SignupSchemaAgent,
    SignupSchemaIndividual,
    SignupSchemaSuperAgent
  } from "@/schema/auth";
  import { HUBSTACKROLES } from "@/types/roles";
  import { FRONTEND_URL } from "@/utils/pages";
import { TOKEN } from "@/utils/token";
  import { useMutation } from "@tanstack/react-query";
  import { useFormik } from "formik";
  import { useRouter } from "next/navigation";


    // signup for business
export const useLogin = () => {
    const router = useRouter();
    const { signupUrl } = useUrls();
    const [, setUserDetails] = useLocalStorage<string>(TOKEN.EMAIL); // to persist
    const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["login"],
        mutationFn: (payload: Partial<IAuthLogin>) => {
          return axiosInstance.post(signupUrl, payload)
        },
    })    
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      } as IAuthLogin,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: LoginSchema,
      onSubmit: async ({ ...values }) => {
        try {
          await formik.validateForm();
          mutate(values, {
            onSuccess: () => {
              setUserDetails(values.email);
              router.push(FRONTEND_URL.LOGIN);
            },
            //   onError: (res: any) => {
  
            //   },
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
};


    // signup for business
    export const useSignupIndividual = () => {
      const router = useRouter();
      const { signupUrl } = useUrls();
      const [, setUserDetails] = useLocalStorage<string>(TOKEN.EMAIL); // to persist
      const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["sign up individual"],
          mutationFn: (payload: Partial<IAuthIndividualSignup>) => {
            return axiosInstance.post(signupUrl, payload)
          },
      })    
    
      const formik = useFormik({
        initialValues: {
          firstname: "",
          lastname: "",
          email: "",
          phoneNumber: "",
          roles: HUBSTACKROLES.INDIVIDUAL,
          password: "",
        } as IAuthIndividualSignup,
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: SignupSchemaIndividual,
        onSubmit: async ({ ...values }) => {
          try {
            await formik.validateForm();
            mutate(values, {
              onSuccess: () => {
                setUserDetails(values.email);
                router.push(FRONTEND_URL.LOGIN);
              },
              //   onError: (res: any) => {
    
              //   },
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
};
  

// Signup for Agent
export const useSignupAgent = () => {
    const router = useRouter();
    const { signupUrl } = useUrls();
    const [, setUserDetails] = useLocalStorage<string>(TOKEN.EMAIL); // to persist
    const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["sign up agent"],
        mutationFn: (payload: Partial<IAuthAgentSignup>) => {
          return axiosInstance.post(signupUrl, payload)
        },
    })    
  
    const formik = useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        superAgent: "",
        location: "",
        roles: HUBSTACKROLES.AGENT,
        password: "",
      } as IAuthAgentSignup,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: SignupSchemaAgent,
      onSubmit: async ({ ...values }) => {
        try {
          await formik.validateForm();
          mutate(values, {
            onSuccess: () => {
              setUserDetails(values.email);
              router.push(FRONTEND_URL.LOGIN);
            },
            //   onError: (res: any) => {
  
            //   },
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
};

  // signup for business
  export const useSignupSuperAgent = () => {
    const router = useRouter();
    const { signupUrl } = useUrls();
    const [, setUserDetails] = useLocalStorage<string>(TOKEN.EMAIL); // to persist
    const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["sign up superagent"],
        mutationFn: (payload: Partial<IAuthSuperAgentSignup>) => {
          return axiosInstance.post(signupUrl, payload)
        },
    })    
  
    const formik = useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        location: "",
        roles: HUBSTACKROLES.AGENT,
        password: "",
      } as IAuthSuperAgentSignup,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: SignupSchemaSuperAgent,
      onSubmit: async ({ ...values }) => {
        try {
          await formik.validateForm();
          mutate(values, {
            onSuccess: () => {
              setUserDetails(values.email);
              router.push(FRONTEND_URL.LOGIN);
            },
            //   onError: (res: any) => {
  
            //   },
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
};