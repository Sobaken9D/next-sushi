'use client';

import {Button} from "@/shared/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import Image from "next/image";
import {Title} from "@/shared/components/shared/title";
import {cn} from "@/shared/lib/utils";
import {ArrowLeft, ArrowRight} from "lucide-react";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/shared/store/hooks";
import {useEffect} from "react";
import {
  fetchStore,
  removeCartItem,
  updateItemQuantity
} from "@/shared/store/features/cartSlice";
import {CartDrawerItem} from "@/shared/components/shared/cart-drawer-item";
import {getPluralNoun} from "@/shared/lib/get-plural-noun";

interface Props {
  children?: React.ReactNode;
}

export const CartDrawer = ({children}: Props) => {
  const dispatch = useAppDispatch();
  const {
    items,
    loading,
    error,
    totalAmount
  } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchStore());
  }, [dispatch]);

  // if (loading) {
  //   return (
  //     <div className="text-center text-[30px]">Loading ...</div>
  //   );
  // }

  console.log(items);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f7eded]">
        <div className={cn("flex flex-col h-full", !totalAmount && "justify-center")}>
          <SheetHeader>
            <SheetTitle>
              {totalAmount > 0 && `В корзине ${items.reduce((acc, item) => acc += item.quantity, 0)} ${getPluralNoun(items.length)}`}
            </SheetTitle>
          </SheetHeader>

          {!totalAmount && (
            <div className="flex flex-col items-center justify-center w-72 mx-auto">
              <Image
                src="/assets/images/empty-box.png"
                alt="empty-cart"
                width={120}
                height={120}
              />
              <Title
                size="sm"
                text="Корзина пустая"
                className="text-center font-bold my-2"
              />
              <p className="text-center text-neutral-500 mb-5">
                Добавьте хотя бы один товар, чтобы совершить заказ
              </p>

              {/*asChild - говорит компоненту: "Не создавай свой собственный HTML-элемент, а вместо этого возьми дочерний элемент и добавь к нему свою функциональность".*/}
              <SheetClose asChild>
                <Button
                  className="w-56 h-12 text-base"
                  size="lg"
                >
                  <ArrowLeft className="w-5 mr-2" />
                  Вернуться назад
                </Button>
              </SheetClose>
            </div>
          )}

          {totalAmount > 0 && (
            <>
              <div className="mt-5 overflow-auto flex-1">
                {
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="mb-2"
                    >
                      <CartDrawerItem
                        weight={item.weight}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.price}
                        quantity={item.quantity}
                        onClickRemove={() => {
                          dispatch(removeCartItem({id: item.id}))
                        }}
                        onClickCountButton={(type: 'plus' | 'minus') => {
                          const newQuantity = type === 'plus' ? item.quantity + 1 : item.quantity - 1;
                          dispatch(updateItemQuantity({
                            id: item.id,
                            quantity: newQuantity
                          }))
                        }}
                      />
                    </div>
                  ))
                }
              </div>
              <SheetFooter className="bg-white p-8">
                <div className="w-full">
                  <div className="flex mb-4">
                    <span className="flex flex-1 text-lg text-neutral-500">
                      Итого
                      <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                    </span>

                    <span className="font-bold text-lg">{totalAmount} ₽</span>
                  </div>

                  <Link href="/checkout">
                    <Button
                      type="submit"
                      className="w-full h-12 text-base"
                    >
                      Оформить заказ
                      <ArrowRight className="w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}