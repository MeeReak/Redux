import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import { NavBar } from "@/components/SideBar";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "To-Do List",
  description: "A simple to-do list app.",
  icons: "to-do-list.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <StoreProvider>
          <Suspense>
            <div className="flex items-start gap-x-10">
              <NavBar />
              {children}
            </div>
          </Suspense>
        </StoreProvider>
      </body>
    </html>
  );
}
