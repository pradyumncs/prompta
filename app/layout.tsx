import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NextAuth.js Example",
  description:
    "This is an example site to demonstrate how to use NextAuth.js for authentication",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <div className="flex flex-col justify-between w-full h-full min-h-screen">
          <Header />
          <main className="flex-auto w-full max-w-5xl px-4 py-4 mx-auto sm:px-6 md:py-6 lg:max-w-full">
            
            {children}
          </main>
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
