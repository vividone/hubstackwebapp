'use client'
import { Input } from "@/components/common/inputs";
import { Button } from "@/components/common/button";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Dropdown } from "@/components/common/Dropdown";
import { countryCodes } from "@/data/countryCodes";
import { FormEvent, useState } from "react";
import { useGetUser, useProfileUpdate } from "@/helpers/api/useProfile";
import ToastComponent from "@/components/common/toastComponent";
import ChangeAvatarModal from "@/components/modals/changeAvatar";
import Image from "next/image";


type Options = {
  label: string,
  value: string
}

const Profile = () => {
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const { formik, isPending, isSuccess, isError, error } = useProfileUpdate(userDetails?.role)
  const { user, isLoading } = useGetUser(userDetails?._id)
  const [ phoneCode, setPhoneCode ] = useState<Options>({ label: "+234", value: "+234" })
  const [changeAvatar, setChangeAvatar] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formik.errors)
    formik.handleSubmit()
  };

  return (
    <>

    {
        changeAvatar ? <ChangeAvatarModal setShow={setChangeAvatar} show={changeAvatar} initialAvatar={formik.values.avatar} selectAvatar={(avatar => formik.setFieldValue("avatar", avatar))} /> : ""
      }

    <form onSubmit={handleSubmit} className="flex flex-col gap-[60px] my-[60px] md:w-[90%]">
      
    <ToastComponent
      isSuccess={isSuccess} 
      isError={isError} 
      msg={isSuccess ? "Update successful" : isError ? "Update error " + error : ""}
    />

      <div className="flex justify-between flex-wrap gap-6">
        <h2 className="font-medium text-lg">Profile Photo</h2>
        <div className="flex gap-4 lg:w-[60%] w-full items-center">
          {
            userDetails?.avatar || formik.values.avatar ?
            <p tabIndex={1} className={`pb-2 flex justify-center cursor-pointer rounded-[20px]`} onClick={() => setChangeAvatar(true)}>
                <Image src={`/avatars/${formik.values.avatar || userDetails?.avatar}.svg`} alt="profilePic" width={88} height={88} />
            </p>
            :
            <p tabIndex={1} className="bg-[#E7E6F2] text-[#507FFF] text-[40px] w-[88px] h-[88px] flex justify-center items-center  cursor-pointer rounded-full uppercase" onClick={() => setChangeAvatar(true)}>
              {userDetails?.firstname.charAt(0)}{userDetails?.lastname.charAt(0)}
            </p>
          }
          <div className="flex flex-col gap-2">
            <p>Profile Avatar </p>
            <p tabIndex={1} className="text-[#3D3066] font-semibold cursor-pointer" onClick={() => setChangeAvatar(!changeAvatar)}>CHOOSE AVATAR</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-2 lg:w-[35%]">
          <h2 className="font-medium text-lg">Full Name</h2>
          {/* <p className="w-[70%] text-[#8C8B92]">Changes cannot be made to your name after account creation</p> */}
        </div>
        <div className="grid md:grid-cols-2 gap-4 items-center lg:w-[60%] w-full w-full">
          <div className="w-full text-[#8c8b92] text-[20px] flex flex-col gap-3">
            <label htmlFor="firstname">First name</label>
            <Input
              placeholder="Firstname"
              name="firstname"
              value={userDetails?.firstname}
              data-test="username-firstname"
              disabled={true}
            />
          </div>
          <div className="w-full text-[#8c8b92] text-[20px] flex flex-col gap-3">
            <label htmlFor="firstname">Last name</label>
            <Input
              placeholder="Lastname"
              name="lastname"
              value={userDetails?.lastname}
              data-test="username-lastname"
              disabled={true}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-2 lg:w-[35%]">
          <h2 className="font-medium text-lg">Email Address</h2>
          {/* <p className="w-[95%] text-[#8C8B92]">All communications and activity notifications from your account will be sent to your email address</p> */}
        </div>
        <div className="lg:w-[60%] w-full text-[#8c8b92]">
          <Input
            placeholder="Email"
            name="email"
            value={userDetails?.email}
            data-test="email"
            disabled={true}
          />
        </div>
      </div>

      {
        userDetails?.role === "Agent" ?
        <>
          <div className="flex justify-between flex-wrap gap-6">
            <div className="flex flex-col gap-2 lg:w-[35%]">
              <h2 className="font-medium text-lg">Business Name</h2>
              {/* <p className="w-[95%] text-[#8C8B92]">All communications and activity notifications from your account will be sent to your email address</p> */}
            </div>
            <div className="lg:w-[60%] w-full text-[#8c8b92]">
              <Input
                placeholder="Business name"
                name="business_name"
                defaultValue={user?.business_name || userDetails?.business_name}
                data-test="business_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
        </>
        :
        ""
      }

      <div className="flex justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-2 lg:w-[35%]">
          <h2 className="font-medium text-lg">Phone Number</h2>
          {/* <p className="w-[85%] text-[#8C8B92]">Your phone number can be used as a security measure to validate your actions on the account.</p> */}
        </div>
        <div className="lg:w-[60%] w-full">
          <div className="w-full flex items-center ">
          <Dropdown
              name="phone_number"
              value={phoneCode}
              onChange={(value) => {
                if (value) {
                  const selectedOption = value as Options;
                  setPhoneCode(selectedOption)
                } else {
                  setPhoneCode({ label: "+93", value: "+93" })
                }
              }}
              options={countryCodes.map((item: string) => ({
                label: item,
                value: item,
              }))}
              className="items-start text-start justify-start rounded-lg w-[110px]"
            />
            <div className="flex-1">
              <Input
                placeholder="Phone number"
                name="phone_number"
                data-test="phone-number"
                defaultValue={userDetails?.phone_number}
                error={formik.touched.phone_number && formik.errors.phone_number}
                onChange={(e) => formik.setFieldValue("phone_number", e.target.value)}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-2 lg:w-[35%]">
          <h2 className="font-medium text-lg">Home Address</h2>
          {/* <p className="w-[70%] text-[#8C8B92]">Your home address can be changed as often as possible to keep your account up to date.</p> */}
        </div>
        <div className="lg:w-[60%] w-full">
          <Input
            placeholder="Home Address"
            name="location"
            data-test="location"
            defaultValue={user?.location || userDetails?.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-6">
        <div className="w-[35%]"></div>
        <div className="lg:w-[60%] w-full flex justify-center">
          <Button
            size={"long"}
            variant="primary"
            type="submit"
            isLoading={isPending}
            disabled={isPending}
          >
            SAVE
          </Button>
        </div>

      </div>

    </form>
    </>
  );
};

export default Profile;
