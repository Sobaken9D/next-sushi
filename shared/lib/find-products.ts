import {prisma} from "@/prisma/prisma-client";
import {findFilterPrices} from "@/shared/lib/find-filter-prices";

export interface GetSearchParams {
  priceFrom?: string;
  priceTo?: string;
}

export const findProducts = async (params: GetSearchParams) => {
  const objOfFilterMinMaxPrices = await findFilterPrices();

  const maxPrice = Number(params.priceTo) || objOfFilterMinMaxPrices.maxPrice;
  const minPrice = Number(params.priceFrom) || objOfFilterMinMaxPrices.minPrice;

  const categories = await prisma.category.findMany({
    include: {
      products: {
        where: {
          price: {
            gte: minPrice, // >=
            lte: maxPrice, // <=
          }
        },
        include: {
          ingredients: true,
          setItems: true
        },
      }
    }
  });

  return categories;
};