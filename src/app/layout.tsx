import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TabContextProvider from "@/contexts/TabContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mind Care Connect",
  description: "Your platform to manage your psychology clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TabContextProvider>
          {children}
        </TabContextProvider>
      </body>
    </html>
  );
}
