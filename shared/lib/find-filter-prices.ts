// import {Category, Product} from "@/generated/prisma/client";
//
// type CategoryWithProducts = Category & {1
//   products: Product[];
// }
//
// export const findFilterPrices = (categories: CategoryWithProducts[]) => {
//   const allPrices = categories.flatMap((category) => {
//     return category.products.map((product) => product.price);
//   });
//
//   return {
//     minPrice: Math.min(...allPrices),
//     maxPrice: Math.max(...allPrices)
//   };
// };

import {prisma} from "@/prisma/prisma-client";

export const findFilterPrices = async () => {
  const aggregate = await prisma.product.aggregate({
    _min: { price: true },
    _max: { price: true },
  });

  return {
    minPrice: aggregate._min.price,
    maxPrice: aggregate._max.price
  };
};