import {Product} from "@/generated/prisma/client";
import {Title} from "@/shared/components/shared/title";
import {Button} from "@/shared/components/ui/button";

interface Props {
  product: Product;
}

export default function ProductForm({product}: Props) {
  console.log(product);

  return (
    <div className="flex justify-center gap-12 p-10 bg-white rounded-3xl shadow-sm border border-gray-100 max-w-[900px] mx-auto">
      <div className="flex items-center justify-center bg-secondary/10 rounded-2xl p-8">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-[350px] h-[350px] object-contain"
        />
      </div>

      <div className="w-[400px] flex flex-col gap-8 justify-between py-4">
        <div>
          <Title
            text={product.name}
            size="md"
            className="font-black text-3xl mb-3 leading-tight"
          />

          <p className="text-sm mb-2 font-bold text-gray-500">
            {product.weight} г
          </p>

          {product.setItems.length > 0 ? (
            <>
              <div className="text-gray-500 text-sm mt-2">
                <b>Состав набора: </b>
                {product.setItems.map((item) => item.name).join(', ')}
                <span>.</span>
              </div>

              <div className="text-gray-500 text-sm mt-2">
                <b>Ингредиенты : </b>
                {product.setItems.map((item) => {
                  return item.ingredients.map((ingredient) => ingredient.name).join(', ');
                }).join(', ')}
                <span>.</span>
              </div>
            </>
          ) : (
            <div className="text-gray-500 text-sm mt-2">
              <b>Ингредиенты : </b>
              {product.ingredients.map((ingredient) => ingredient.name).join(', ')}
              <span>.</span>
            </div>
          )}

          <div className="text-gray-500 text-sm mt-6">
            <b>Пищевая ценность на 100 г : </b>
            <div className="flex justify-between mt-1">
              <div>
                <p>Белки</p>
                <p>{product.nutrition.proteins} г</p>
              </div>
              <div>
                <p>Жиры</p>
                <p>{product.nutrition.fats} г</p>
              </div>
              <div>
                <p>Углеводы</p>
                <p>{product.nutrition.carbs} г</p>
              </div>
              <div>
                <p>Калории</p>
                <p>{product.nutrition.calories} ккал</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-2xl font-bold">
            {product.price} ₽
          </div>

          <Button
            size="lg"
            className="w-full h-[55px] px-10 text-base font-bold rounded-xl cursor-pointer"
          >
            Добавить в корзину
          </Button>
        </div>
      </div>
    </div>
  );
}