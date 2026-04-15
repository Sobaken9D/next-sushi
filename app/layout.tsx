import type {Metadata} from "next";
import "./globals.css";

import {Roboto, Geist} from "next/font/google";
import {cn} from "@/shared/lib/utils";

const geist = Geist({subsets: ['latin'], variable: '--font-sans'});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Next Sushi",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable)}
    >
    <body className={roboto.variable}>
    {children}
    </body>
    </html>
  );
}
