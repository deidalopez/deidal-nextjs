import type { Metadata } from "next";
import { Outfit, Crimson_Text } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/app/components/NavBar";
import Contact from "@/app/components/Contact";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "Deida",
  description: "Deida Lopez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${crimsonText.variable}`} suppressHydrationWarning>
      <body className={`bg-bkg text-textPrimary ${outfit.className}`}>
        <Providers>
          <NavBar />
          <main className="flex flex-col min-h-screen px-4 md:px-6">
            {children}
          </main>
          <Contact />
        </Providers>
      </body>
    </html>
  );
}
