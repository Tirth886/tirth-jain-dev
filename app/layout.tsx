import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tirth Jain | FullStack Developer | Software Engineer",
  description: "Experienced FullStack Developer and Software Engineer, adept in both front-end and back-end technologies. Crafting seamless, user-centric applications with a blend of creativity and technical skill.",
  openGraph: {
    type: "website",
    images: "https://131d-103-238-107-187.ngrok-free.app/tj.png",
    determiner: "auto",
    description: "Discover the world of Tirth Jain - a passionate FullStack Developer and Software Engineer. From front-end finesse to back-end brilliance, Tirth's creations redefine user experiences through innovation and expertise.",
    siteName: "tirthj.dev",
    phoneNumbers: "+91-7984814283",
    title: "Tirth Jain | FullStack Developer | Software Engineer",
    url: "https://tirthj.dev/",
    countryName: "India",
    emails: "tirth886jain@gmail.com",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
