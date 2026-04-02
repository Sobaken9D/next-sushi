import React from "react";
import {cn} from "@/shared/lib/utils";
import {Container} from "@/shared/components/shared/container";
import Link from "next/link";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  return (
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={50}
              height={50}
            />
            <div>
              <h1 className="text-2xl uppercase font-bold">Next-Sushi</h1>
              <p className="text-gray-400 leading-3">Суши и Роллы</p>
            </div>
          </div>
        </Link>
      </Container>
    </header>
  );
}