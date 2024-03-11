import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { StorageProvider } from "@/providers/StorageProvider";
import { AsideBar } from "@/components/AsideBar/AsideBar";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streaming app",
  description: "Generated Yevhenii Zadorozhnyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StorageProvider>
        <body className={inter.className}>
          <Header />
          <div className="wrap">
            <AsideBar />
            {children}
          </div>
        </body>
      </StorageProvider>
    </html>
  );
}
