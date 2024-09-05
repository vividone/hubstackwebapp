'use client'
import { Input } from "@/components/common/inputs";
import { Button } from "@/components/common/button";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Dropdown } from "@/components/common/Dropdown";
import { FormEvent, useEffect, useState } from "react";
import { useGetUser, useProfileUpdate } from "@/helpers/api/useProfile";
import ToastComponent from "@/components/common/toastComponent";
import Image from "next/image";
import { LoaderIcon } from "react-hot-toast";


type Options = {
  label: string,
  value: string
}

const KycPage = () => {
  const [userDetails, setUserDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const { formik, isPending, isSuccess, isError, error } = useProfileUpdate(userDetails?.role)
  const { user, isLoading } = useGetUser(userDetails?._id)
  const [ CAC, setCAC ] = useState<Options>({ label: "Yes", value: "Yes" })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit()
  };

  useEffect(() => {
    if(isSuccess) {
      setUserDetails({ ...userDetails, kyc: "Pending" })
    }
  }, [isSuccess, setUserDetails, userDetails])

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[60px] my-[60px] md:w-[90%]">
      
    <ToastComponent
      isSuccess={isSuccess} 
      isError={isError} 
      msg={isSuccess ? "KYC information sent successfully" : isError ? " " + error : ""}
    />

      <div className="flex justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-2 lg:w-[35%]">
          <h2 className="font-medium text-lg">KYC</h2>
          <p className="text-[#8C8B92]">Get verified in other to use the nin services just by filling the details as shown</p>
        </div>

        {
        user?.kyc === "Pending" || userDetails?.kyc === "Pending" ?
        
        <div className="md:left-[35%] left-0 z-[2] bg-white md:w-[55%] w-full flex flex-col items-center mx-auto py-10 2xl:px-[15%] lg:px-[10%] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-center">
        
          <Image src={"/images/error.png"} alt="pending" width={160} height={100} />

          <h1 className="flex gap-2 items-center text-center font-medium 2xl:text-[32px] xl:text-[28px] text-[18px] mt-8">Pending Approval <LoaderIcon /></h1>
        </div>
        :

        user?.kyc === "Verified" ?
          
        <div className="md:left-[35%] left-0 z-[2] bg-white md:w-[55%] w-full flex flex-col items-center mx-auto py-10 2xl:px-[15%] lg:px-[10%] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-center">
        
          <Image src={"/images/thumbsup.svg"} alt="pending" width={160} height={100} />

          <h1 className="text-center font-medium 2xl:text-[32px] xl:text-[28px] text-[18px] mt-8">Approved</h1>
        </div>
        :
        <div className="flex flex-col gap-4 lg:w-[60%] w-full">

            <div className="w-full text-[20px] flex flex-col gap-3">
                <label htmlFor="Business_name">Business name</label>
                <Input
                    placeholder=""
                    name="Business_name"
                    value={formik.values.business_name}
                    defaultValue={user?.business_name || userDetails?.business_name}
                    data-test="username-Business_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.business_name && formik.errors.business_name}
                />
            </div>

            <div className="w-full text-[20px] flex flex-col gap-3">
                <label htmlFor="operation_address">Operation Address</label>
                <Input
                    placeholder=""
                    name="Operation_address"
                    value={formik.values.operation_address}
                    defaultValue={user?.operation_address || userDetails?.operation_address}
                    data-test="username-operation_address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.operation_address && formik.errors.operation_address}
                />
            </div>

            <div className="w-full text-[20px] flex flex-col gap-3">
                <label htmlFor="operation_addres">Are you registered with CAC</label>
                <Dropdown
                    name="CAC"
                    value={CAC}
                    onChange={(value) => {
                        if (value) {
                        const selectedOption = value as Options;
                        setCAC(selectedOption)
                        } else {
                        setCAC({ label: "Yes", value: "Yes" })
                        }
                    }}
                    options={["Yes", "No"].map(item => ({
                        label: item,
                        value: item,
                    }))}
                    className="items-start text-start justify-start rounded-lg"
                />
            </div>
            
            {
                CAC.value === "Yes" ?
                <div className="w-full text-[20px] flex flex-col gap-3">
                    <label htmlFor="operation_address">CAC Registration Number</label>
                    <Input
                        placeholder=""
                        name="CAC_number"
                        type="number"
                        data-test="username-CAC_number"
                        value={formik.values.CAC_number}
                        defaultValue={user?.CAC_number || userDetails?.CAC_number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.CAC_number && formik.errors.CAC_number}
                    />
                </div>
                :
                ""
            }
            

            <div className="flex justify-center mt-6">
                <Button
                    size={"long"}
                    variant="primary"
                    type="submit"
                    isLoading={isPending}
                    disabled={isPending}
                >
                    SUBMIT
                </Button>
            </div>

        </div>
          
      }
      </div>



    </form>
  );
};

export default KycPage;
