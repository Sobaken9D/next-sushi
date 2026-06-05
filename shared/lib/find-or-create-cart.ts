import {Cart} from "@/generated/prisma/client";
import {prisma} from "@/prisma/prisma-client";

// любая async функция возвращает Promise => Promise<Cart> вместо Cart
export async function findOrCreateCart(token: string): Promise<Cart> {
  let userCart = await prisma.cart.findFirst({
    where: {
      token
    }
  });

  if (!userCart) {
    userCart = await prisma.cart.create({
      data: {
        token,
      }
    });
  }

  return userCart;
}

