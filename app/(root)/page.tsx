import {Container} from "@/shared/components/shared/container";
import {Title} from "@/shared/components/shared/title";
import {prisma} from "@/prisma/prisma-client";
import {findProducts} from "@/shared/lib";
import {TopBar} from "@/shared/components/shared/top-bar";
import {
  ProductsGroupList
} from "@/shared/components/shared/products-group-list";
import {Suspense} from "react";
import {Filters} from "@/shared/components/shared/filters";
import {findFilterPrices} from "@/shared/lib/find-filter-prices";
import {GetSearchParams} from "@/shared/lib/find-products";

export default async function Home({searchParams}: {searchParams: GetSearchParams}) {
  const categories = await findProducts(await searchParams);

  return (
    <>
      <Container>
        <Title
          text="Все товары"
          size="lg"
          className="font-extrabold"
        />
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 0)} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

          {/*фильтрация*/}
          <div className="w-[250px]">
            <Suspense fallback="Загрузка фильтров...">
              <Filters filterPrices={await findFilterPrices()}></Filters>
            </Suspense>
          </div>

          {/*список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {
                categories.map((category) => {
                  return category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      categoryId={category.id}
                      title={category.name}
                      items={category.products}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}