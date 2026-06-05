import {AbstractService} from "@/shared/services/abstract-service";
import {axiosInstance} from "@/shared/services/axios-instance";
import {
  CartDto,
  CreateCartItemDto,
  DeleteCartItemDto, UpdateCartItemQuantityDto
} from "@/shared/services/dto/cart.dto";

// GET (/api/cart): "Дай мне корзину".
// POST (/api/cart): "Добавь новый товар в корзину".
// PATCH (/api/cart/[id]): "Обнови количество уже лежащего там товара по id".
// DELETE (/api/cart/[id]): "Удали товар с id из корзины".

class CartService extends AbstractService {
  constructor() {
    super('/cart');
  }

  // 1. Получение корзины
  async getCart(): Promise<CartDto> {
    try {
      // без axios пришлось бы использовать fetch, прописывать method, headers и тд.
      const {data}: {data: CartDto} = await axiosInstance.get<CartDto>(this.url);
      return data;
    } catch (error) {
      this.handleError(error, 'GET_CART');
    }
  }

  // 2. Добавление в корзину
  async addCartItem(values: CreateCartItemDto): Promise<CartDto> {
    try {
      // values тут это тело запроса с нашим id добавляемого товара
      const {data}: {data: CartDto} = await axiosInstance.post<CartDto>(this.url, values);
      return data;
    } catch (error) {
      this.handleError(error, 'ADD_ITEM');
    }
  }

  // 3. Удаление товара из корзины
  async removeCartItem({id}: DeleteCartItemDto): Promise<CartDto> {
    try {
      const {data}: {data: CartDto} = await axiosInstance.delete<CartDto>(`${this.url}/${id}`);
      return data;
    } catch (error) {
      this.handleError(error, 'REMOVE_ITEM');
    }
  }

  // 3. Обновление количества
  async updateItemQuantity({id, quantity}: UpdateCartItemQuantityDto): Promise<CartDto> {
    try {
      const {data}: {data: CartDto} = await axiosInstance.patch<CartDto>(`${this.url}/${id}`, {quantity});
      return data;
    } catch (error) {
      this.handleError(error, 'UPDATE_QUANTITY_ITEM');
    }
  }
}

export const cartApi = new CartService();