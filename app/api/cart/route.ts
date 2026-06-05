import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";
import {CreateCartItemDto} from "@/shared/services/dto/cart.dto";
import {findOrCreateCart} from "@/shared/lib/find-or-create-cart";
import {createUpdatedCart} from "@/shared/lib/cteate-updated-cart";

// Что0бы задать token вручную = F12 -> Application -> Name = cartToken, Value = ...

// данный запрос будет выполнен при вставке http://localhost:3000/api/cart в адресную строку
export async function GET(req: NextRequest) {
  try {
    // Получаем токен нашей корзины из куки
    // Под этим токеном будет храниться казина в БД
    const token = req.cookies.get('cartToken')?.value;

    // если нет токена то возвращаем пустую корзину
    // если токен есть то находим корзину пользователя по токену

    console.log(token);

    if (!token) {
      return NextResponse.json({totalAmount: 0, items: []});
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        token
      }
    });

    return NextResponse.json(userCart);
  } catch (error) {
    // Если поймали ошибку
    console.log(error);
    return NextResponse.json({message: `ERROR_MESSAGE(CART_GET_ERROR): ${error}`});
  }
}

// Для теста POST в Postman
// 1. Указываем метод POST
// 2. Указываем ссылку с методом http://localhost:3000/api/cart
// 3. Указываем в body -> raw тело запроса:
// {
//   "productItemId": 3,
// }
// 4. Указываем куки в Cookies

export async function POST(req: NextRequest) {
  try {
    // пытаемся получить cartToken из куки
    let token = req.cookies.get('cartToken')?.value;

    // если не получилось, то создаем свой токен
    if (!token) {
      token = crypto.randomUUID();
    }

    // ищем корзину пользователя по token
    // или создаем ее, если ее у него нет
    const userCart = await findOrCreateCart(token);

    // получаем данные из реквеста c нужным типом
    const data = (await req.json()) as CreateCartItemDto;

    // ищем добавляймый элемент в корзине
    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
      }
    });

    // если элемент корзины найден, то + 1
    // если нет, то создаем его

    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productItemId: data.productItemId,
          quantity: 1
        }
      })
    }

    // создаем новую корзину для ответа
    const updatedCart = await createUpdatedCart(token);

    const response = NextResponse.json(updatedCart);
    response.cookies.set('cartToken', token);
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: `ERROR_MESSAGE(CART_POST_ERROR): ${error}`});
  }
}