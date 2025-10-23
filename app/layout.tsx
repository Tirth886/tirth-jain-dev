import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import SEOScripts from "@/components/seo-scripts";
import { Metadata } from "next";
import { seo, personal, contact } from "@/config/site-config";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(`https://${personal.domain}`),
  title: {
    default: seo.title,
    template: `%s | ${personal.name} - ${personal.title}`
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: seo.author, url: `https://${personal.domain}` }],
  creator: seo.creator,
  publisher: seo.publisher,
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tirthj.dev/",
    siteName: "Tirth Jain - Full Stack Developer",
    title: "Tirth Jain | Professional Full Stack Developer & Software Engineer",
    description: "Expert full-stack developer with 6+ years experience. Specialized in React, Next.js, Node.js, PHP, and modern web technologies. Available for international projects and consulting.",
    images: [
      {
        url: "/tj.png",
        width: 1200,
        height: 630,
        alt: "Tirth Jain - Full Stack Developer & Software Engineer",
        type: "image/png",
      },
      {
        url: "/tj.png",
        width: 400,
        height: 400,
        alt: "Tirth Jain Profile Picture",
        type: "image/png",
      }
    ],
    emails: [contact.email],
    phoneNumbers: [contact.phone],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirth Jain | Full Stack Developer & Software Engineer",
    description: "Professional full-stack developer available for international projects. Expert in React, Next.js, Node.js, PHP, and modern web technologies.",
    images: ["/tj.png"],
    creator: "@tirthjaindev",
  },
  alternates: {
    canonical: "https://tirthj.dev/",
    languages: {
      'en-US': 'https://tirthj.dev/',
      'hi-IN': 'https://tirthj.dev/',
    },
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "geo.region": "IN-GJ",
    "geo.placename": "Gujarat, India",
    "ICBM": "23.0225, 72.5714",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-20 sm:pt-24`}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}

function ConditionalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SEOScripts />
      
      {/* Responsive background gradients - only for non-privacy pages */}
      <div className="privacy-exclude bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
                      sm:w-[68.75rem] sm:h-[50rem] sm:top-[-10rem] sm:right-[-10rem]
                      md:w-[75rem] md:h-[55rem] md:right-[-5rem]
                      lg:w-[80rem] lg:h-[60rem] lg:right-[0rem]
                      xl:w-[85rem] xl:h-[65rem] xl:right-[5rem]
                      2xl:w-[90rem] 2xl:h-[70rem] 2xl:right-[10rem]"></div>
      <div className="privacy-exclude bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
                      sm:w-[68.75rem] sm:h-[50rem] sm:left-[-20rem] sm:top-[-5rem]
                      md:left-[-15rem] md:w-[75rem] md:h-[55rem] 
                      lg:left-[-10rem] lg:w-[80rem] lg:h-[60rem] 
                      xl:left-[-5rem] xl:w-[85rem] xl:h-[65rem] 
                      2xl:left-[0rem] 2xl:w-[90rem] 2xl:h-[70rem]"></div>

      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <div className="privacy-exclude">
            <Header />
          </div>
          {children}
          <div className="privacy-exclude">
            <Footer />
          </div>

          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-color)',
              },
            }}
          />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </>
  );
}
