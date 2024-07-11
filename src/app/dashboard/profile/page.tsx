'use client'
import { Input } from "@/components/common/inputs";
import { Button } from "@/components/common/button";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Dropdown } from "@/components/common/Dropdown";
import { countryCodes } from "@/data/countryCodes";
import { useState } from "react";


type Options = {
  label: string,
  value: string
}

const Profile = () => {
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const [ phoneCode, setPhoneCode ] = useState<Options>()

  return (
    <div className="flex flex-col gap-[60px] my-[60px] md:w-[90%]">

      <div className="flex justify-between flex-wrap gap-6">
        <h2 className="font-medium text-lg">Profile Photo</h2>
        <div className="flex gap-4 lg:w-[60%] w-full items-center">
          <p className="bg-[#E7E6F2] text-[#507FFF] text-[40px] w-[88px] h-[88px] flex justify-center items-center rounded-full uppercase">{userDetails?.firstname.charAt(0)}{userDetails?.lastname.charAt(0)}</p>
          <div className="flex flex-col gap-2">
            <p>We accept files in PNG or JPG format </p>
            <p>CHANGE PHOTO</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-2 lg:w-[35%]">
          <h2 className="font-medium text-lg">Full Name</h2>
          <p className="w-[70%] text-[#8C8B92]">Changes cannot be made to your name after account creation</p>
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
          <p className="w-[95%] text-[#8C8B92]">All communications and activity notifications from your account will be sent to your email address</p>
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

      <div className="flex justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-2 lg:w-[35%]">
          <h2 className="font-medium text-lg">Phone Number</h2>
          <p className="w-[85%] text-[#8C8B92]">Your phone number can be used as a security measure to validate your actions on the account.</p>
        </div>
        <div className="lg:w-[60%] w-full">
          <div className="w-full flex items-center ">
          <Dropdown
              name="region"
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
              className="items-start text-start justify-start rounded-lg border border-[#E7E6F2] w-[110px]"
            />
            <div className="flex-1">
              <Input
                placeholder="Phone number"
                name="phoneNumber"
                data-test="phone-number"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-2 lg:w-[35%]">
          <h2 className="font-medium text-lg">Home Address</h2>
          <p className="w-[70%] text-[#8C8B92]">Your home address can be changed as often as possible to keep your account up to date.</p>
        </div>
        <div className="lg:w-[60%] w-full">
          <Input
            placeholder="Home Address"
            name="address"
            data-test="address"
          />
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-6">
        <div className="w-[35%]"></div>
        <div className="lg:w-[60%] w-full flex justify-center">
          <Button
            size={"long"}
            variant="primary"
            name="save"
            id="save"
            type="submit"
          >
            SAVE
          </Button>
        </div>

      </div>

    </div>
  );
};

export default Profile;
