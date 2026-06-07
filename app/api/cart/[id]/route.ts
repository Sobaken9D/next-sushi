import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";
import {createUpdatedCart} from "@/shared/lib/create-updated-cart";

export async function DELETE(req: NextRequest, {params}: {
  params: Promise<{ id: string }>
}) {
  try {
    const {id} = await params;

    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({error: "token not found"});
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: id,
      },
    });

    if (!cartItem) {
      return NextResponse.json({error: "cart item not found"});
    }

    await prisma.cartItem.delete({
      where: {
        id: id,
      }
    });

    const updatedCartItem = await createUpdatedCart(token);

    return NextResponse.json(updatedCartItem);
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: `ERROR_MESSAGE(CART_DELETE_ERROR): ${error}`});
  }
}

export async function PATCH(req: NextRequest, {params}: {
  params: Promise<{ id: string }>
}) {
  try {
    const {id} = await params;

    const data = (await req.json()) as { quantity: number };

    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({error: "token not found"});
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: id,
      }
    });

    if (!cartItem) {
      return NextResponse.json({error: "cart item not found"});
    }

    await prisma.cartItem.update({
      where: {
        id: id,
      },
      data: {
        quantity: data.quantity,
      }
    })

    const updatedCartItem = await createUpdatedCart(token);

    return NextResponse.json(updatedCartItem);
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: `ERROR_MESSAGE(CART_PATCH_ERROR): ${error}`});
  }
}