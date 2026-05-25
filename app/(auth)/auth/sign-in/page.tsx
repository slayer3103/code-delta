import React from 'react'
import Image from 'next/image'
import SignInFormClient from '@/modules/auth/components/sign-in-form-client'

const page = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-6 max-w-5xl w-full">
      <div className="hidden md:flex flex-col items-center justify-center max-w-sm text-center">
        <Image src={"/login.svg"} alt="login-image" width={300} height={300} className='m-6 object-contain' priority />
      </div>
      <SignInFormClient />
    </div>
  )
}

export default page