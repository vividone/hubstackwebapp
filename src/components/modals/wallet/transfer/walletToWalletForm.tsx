import { Button } from "@/components/common/button";
import CurrencyField from "@/components/common/currencyInput";
import { Input } from "@/components/common/inputs";

export default function TransferToWallet({ form, setForm, formik, isPending, handleSubmit }: any) {
    return (
        <div className="">
            <div className="flex flex-col w-full mt-5">
              <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                Enter Recipient Username
              </label>
              <div className="text-[#8c8b92] mt-2">
              <Input 
                  name="username" 
                  onChange={(e) => {
                    setForm({ ...form, username: e.target.value });
                    formik.setFieldValue("username", e.target.value)
                  }}

              />
              </div>
          </div>

          <div className="flex flex-col w-full mt-5">
              <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                Amount
              </label>
              <div className="text-[#8c8b92] mt-2">
              <CurrencyField
                  onValueChange={(v: any) => setForm({ ...form, amount: v.floatValue })} 
                  value={form?.amount} 
                />
              </div>
          </div>
          
          <div className="flex flex-col w-full mt-5">
              <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                Description (Optional)
              </label>
              <div className="text-[#8c8b92] mt-2">
              <Input 
                  name="description" 
                  onChange={(e) => {
                    setForm({ ...form, description: e.target.value });
                    formik.setFieldValue("description", e.target.value)
                  }}

              />
              </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button
              variant="primary"
              size="long"
              type="submit"
              isLoading={isPending}
              disabled={isPending}
              onClick={() => handleSubmit()}
              // className="mt-10"
            >
              <span className="text-[16px] ">
                TRANSFER TO THIS WALLET
              </span>
            </Button>
          </div>
        </div>
    )
}