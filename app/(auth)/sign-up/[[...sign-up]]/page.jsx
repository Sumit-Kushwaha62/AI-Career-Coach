'use client';
import { SignUp } from '@clerk/nextjs';


export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUp
        path="/sign-up"       // Must match your Clerk dev component path
        routing="path"        // Use app route instead of redirecting to /
        signInUrl="/sign-in"  // Link to sign-in page
      />
    </AuthLayout>
  );
}


// "use client";

// import { SignUp } from "@clerk/nextjs";

// export default function Page() {
//   return <SignUp />;
// }
