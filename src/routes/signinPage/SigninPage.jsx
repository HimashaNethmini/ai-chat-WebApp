import "./signinPage.css";
import { SignIn } from "@clerk/clerk-react";

const SigninPage = () => {
  return (
    <div className="signinPage">
      {/* when click on sigin btn, navigates to sign-up page */}
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
};

export default SigninPage;
