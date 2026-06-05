import {Cart} from "@/generated/prisma/client";
import {prisma} from "@/prisma/prisma-client";

export async function createUpdatedCart(token: string): Promise<Cart> {
  const userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
    include: {
      items: {
        orderBy: {
          createdAt: 'desc'
        },
        include: {
          productItem: true
        }
      }
    }
  });

  if (!userCart) {
    return;
  }

  const totalAmount = userCart.items.reduce((acc, item) => {
    return acc + (item.productItem.price * item.quantity);
  }, 0);

  const updatedCart = await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalAmount: totalAmount
    },
    include: {
      items: {
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  });

  return updatedCart;
}