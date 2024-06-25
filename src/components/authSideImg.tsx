import Image from "next/image";

export default function AuthSideImg() {
    return (
      <div className="md:flex hidden flex-col justify-between bg-[#3D3066] w-[35%]">
        <div className="px-[15%] py-[10%] ">
          <Image alt="hubstack logo" src={"/images/hubstackLogo.svg"} width={200} height={40} />
        </div>
        <div className="flex flex-col justify-end relative">
          <Image src={"/images/product_teardown.png"} alt="agent" width={2000} height={400} />
          <Image src={"/images/shape.svg"} alt="agent" width={2000} height={400} />
        </div>
      </div>
    )
}