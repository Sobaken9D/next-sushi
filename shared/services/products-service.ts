import {AbstractService} from "@/shared/services/abstract-service";
import {axiosInstance} from "@/shared/services/axios-instance";
import {Product} from "@/generated/prisma/client";
import {CartDto} from "@/shared/services/dto/cart.dto";

class ProductsService extends AbstractService {
  constructor() {
    super('/products');
  }

  // 1. Метод для поиска продуктов
  async searchProducts (query: string): Promise<Product[]> {
    try {
      // values тут это тело запроса с нашим id добавляемого товара
      const {data}: {data: Product[]} = await axiosInstance.get<Product[]>(`${this.url}/search`, {params: {query}});
      return data;
    } catch (error) {
      this.handleError(error, 'GET_PRODUCTS');

      throw error;
    }
  }
}

export const productsApi = new ProductsService();