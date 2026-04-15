'use client';

import {Button} from "@/shared/components/ui/button";
import {cn} from "@/shared/lib/utils";
import {ArrowRight, ShoppingCart} from "lucide-react";
import {CartDrawer} from "@/shared/components/shared/cart-drawer";


interface Props {
  className?: string;
}

// group на родителе заставляет срабатывать group-hover на потомках

export const CartButton = ({className}: Props) => {
  return (
    <CartDrawer>
      <Button variant="default" className={cn("group relative", className)}>
        <b>{100} ₽</b>
        <span className="h-full w-[1px] bg-white/30 mx-3"></span>
        <div className="flex items-center gap-1 duration-300 group-hover:opacity-0">
          <ShoppingCart
            size={16}
            strokeWidth={2}
            className="relative"
          />
          <b>{2}</b>
        </div>
        <ArrowRight strokeWidth={3} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"/>
      </Button>
    </CartDrawer>
  );
}