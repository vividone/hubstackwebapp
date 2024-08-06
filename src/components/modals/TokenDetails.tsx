import React from 'react'
import Image from 'next/image'

const TokenDetails = ({setShow}:any) => {
  return (
    <section className="flex flex-col bg-white w-[90vw] md:w-[45vw] text-black h-[100vh] overflow-y-scroll">
      <header className="flex justify-between items-center font-medium text-4xl mb-12 p-10">
        <h1>Token Details</h1>
        <Image
          width={20}
          height={20}
          alt="close button"
          src="/images/close.svg"
          className="cursor-pointer"
          onClick={() => setShow(false)}
        />
      </header>
    </section>
  )
}

export default TokenDetails