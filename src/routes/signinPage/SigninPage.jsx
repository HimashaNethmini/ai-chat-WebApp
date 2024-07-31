import './signinPage.css';
import { SignIn } from '@clerk/clerk-react';

const SigninPage = () => {
  return (
    <div className='signinPage'>
      <SignIn path ="/sign-in"  signUpUrl="/sign-up"/> {/* when click on sigin btn, navigates to sign-up page */}
    </div>
  )
}

export default SigninPage