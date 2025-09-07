"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      // afterSignUpUrl="/onboarding"
    />
  );
}









// "use client";
// import { SignUp } from "@clerk/nextjs";

// export default function Page() {
//   return <SignUp />;
// }
