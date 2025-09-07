
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
// import { Toaster } from "sonner";
// import Header from "@/components/header";
// import { ThemeProvider } from "@/components/theme-provider";
// import { dark } from "@clerk/themes";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "AI Career Coach",
//   description: "",
// };



// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="icon" href="/logo2.png" sizes="any" />
//       </head>
//       <body className={`${inter.className}`}>
//         <ClerkProvider appearance={{ baseTheme: dark }}>
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="dark"
//             enableSystem
//             disableTransitionOnChange
//           >
//             <Header />
//             <main className="min-h-screen">{children}</main>
//             <Toaster richColors />

//             <footer className="bg-muted/50 py-12">
//               <div className="container mx-auto px-4 text-center text-gray-200">
//                 <p>Made with 💗 by Sumit_Kushwaha</p>
//               </div>
//             </footer>
//           </ThemeProvider>
//         </ClerkProvider>
//       </body>
//     </html>
//   );
// }







import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo2.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          signInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
          signUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
          // afterSignInUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL}
          // afterSignUpUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}
          appearance={{ baseTheme: dark }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by Sumit_Kushwaha</p>
              </div>
            </footer>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
