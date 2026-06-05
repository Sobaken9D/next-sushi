'use client';

import React from 'react';
import {Api} from "@/shared/services/api-client";

export const Test = () => {
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = await Api.cart.getCart();

        // const data1 = await Api.cart.addCartItem({
        //   productItemId: "cmp2hyhna002680u2pcn7ikas"
        // });

        // const data = await Api.cart.removeCartItem({
        //   id: "cmp2m2d930002a8u2xhu8t780"
        // });

        // const data = await Api.cart.updateItemQuantity({
        //   id: "cmp3yfkjq0000tcu2lu30n7ud",
        //   quantity: 10
        // });
        //
        // console.log(data);
      } catch (error) {
        console.error("Ошибка при загрузке корзины:", error);
      }
    };

    fetchData(); // Вызываем её
  }, []);

  return (
    <div>TEST</div>
  );
};