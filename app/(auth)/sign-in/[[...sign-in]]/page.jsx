'use client';
import { SignIn } from '@clerk/nextjs';
import AuthLayout from '../layouts/AuthLayout'; // Adjust path if needed

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignIn
        path="/sign-in"       // Must match your Clerk dev component path
        routing="path"        // Use app route instead of redirecting to /
        signUpUrl="/sign-up"  // Link to sign-up page
      />
    </AuthLayout>
  );
}

// "use client";

// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return <SignIn />;
// }