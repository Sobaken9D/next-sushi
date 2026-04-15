import React from "react";
import {cn} from "@/shared/lib/utils";
import {Container} from "@/shared/components/shared/container";
import Link from "next/link";
import Image from "next/image";
import {SearchInput} from "@/shared/components/shared/search-input";
import {Button} from "@/shared/components/ui/button";
import {User} from "lucide-react";
import {CartButton} from "@/shared/components/shared/cart-button";

interface Props {
  className?: string;
}

export const Header = ({className}: Props) => {
  return (
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/*Лого*/}
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

        {/*Поиск*/}
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        {/*Корзина и профиль*/}
        <div className="flex items-center gap-3">
          <Button
            size="default"
            variant="outline"
            className="flex items-center gap-1"
          >
            Войти
            <User size={16} />
          </Button>
          <CartButton/>
        </div>

      </Container>
    </header>
  );
}