import React from "react";
import { Input } from "@/components/common/inputs";
import { Button } from "@/components/common/button";
import { Formik } from "formik";
const page = () => {
  interface formValues {
    password: string;
    newPassword: string;
  }
  const initialValues: formValues = {
    password: "",
    newPassword: "",
  };

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="password">Enter New Password</label>
          <Input />
        </div>
        <div>
          <label htmlFor="newpassword">Re-enter New Password</label>
          <Input />
        </div>
      </form>
      <Button size="long">
         Save
      </Button>
    </div>
  );
};

export default page;
