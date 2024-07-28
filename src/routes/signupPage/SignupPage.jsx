import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const SignupPage = () => {
  return (
    <div className='signupPage'>
      <SignUp path = "/sign-up" />
    </div>
  )
}

export default SignupPage