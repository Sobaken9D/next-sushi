import React from "react";
import {Header} from "@/shared/components/shared/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header></Header>
      {children}
    </main>
  );
}
