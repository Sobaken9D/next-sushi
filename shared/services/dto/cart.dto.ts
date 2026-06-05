// dto решает проблемы:
// 1. Relations, т.е по умолчанию Prisma не возвращает вложенные связи.
// 2. Отсекаем лишние данные, которые в этом случае нам не нужны (напр. createdAt и тд.)
// 3. Вычисляемые поля. Т.е к базовому интерфейсу мы можем добавлять еще поля.

import {CartItem, Product} from "@/generated/prisma/client";

export type CartItemDto = CartItem & {
  productItem: Product;
}

export interface CartDto {
  items: CartItemDto;
}
  
export interface CreateCartItemDto {
  productItemId: string;
}

export interface DeleteCartItemDto {
  id: string;
}

export interface UpdateCartItemQuantityDto {
  id: string;
  quantity: number;
}

