import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams.get('query') || '';

    const products = await prisma.product.findMany({
      where: {
        name: { // делаем сравнение includes по продуктам
          contains: query,
          mode: 'insensitive', // регистрозависимость
        },
      },
      take: 5, // только 5 продуктов
    });

    return NextResponse.json(products);
  } catch (error) {
    // Если поймали ошибку
    console.log(error);
    return NextResponse.json({message: `ERROR_MESSAGE(CART_GET_ERROR): ${error}`});
  }
}