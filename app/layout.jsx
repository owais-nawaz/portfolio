import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// theme-provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Owais Nawaz | Portfolio",
  description: "Full-stack developer portfolio showcasing projects and skills",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
