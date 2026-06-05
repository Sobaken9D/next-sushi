import React from "react";
import {Header} from "@/shared/components/shared/header";

export default function HomeLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main>
      <Header></Header>
      {children}
      {modal}
    </main>
  );
}
