import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ThemeSwitcherProvider } from "@/providers/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";

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
      <body className={inter.className}>
        <ThemeSwitcherProvider>
          <ThemeSwitcher />
          {children}
        </ThemeSwitcherProvider>
      </body>
    </html>
  );
}
