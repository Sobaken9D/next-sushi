import {Ingredient, Product} from "@/generated/prisma/client";
import Link from "next/link";
import {Title} from "@/shared/components/shared/title";
import {Button} from "@/shared/components/ui/button";
import {Plus} from "lucide-react";
import {cn} from "@/shared/lib/utils";
import {useAppDispatch} from "@/shared/store/hooks";
import {addCartItem} from "@/shared/store/features/cartSlice";
import toast from "react-hot-toast";

interface Props {
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  setItems: Product[];
  weight: number;
  className?: string;
}

export const ProductCard = ({
  productId,
  name,
  price,
  imageUrl,
  ingredients,
  setItems,
  weight,
  className
}: Props) => {
  const dispatch = useAppDispatch();

  const handleAddProduct = (id: string) => {
    dispatch(addCartItem({productItemId: id}));
  };

  return (
    <div className={className}>
      <Link
        href={`/product/${productId}`}
        scroll={false}
        className="flex flex-col flex-1"
      >

        <div className="flex justify-center">
          <img
            className="w-full h-full rounded-2xl"
            src={imageUrl}
            alt={name}
          />
        </div>

        <div className="flex-1 flex flex-col">
          <Title
            text={name}
            size="sm"
            className="mb-1 mt-3 font-bold line-clamp-2 min-h-[44px] leading-tight"
          />

          <p className="text-sm mb-2 font-bold text-gray-500">
            {weight} г
          </p>

          <p className="text-gray-400 text-sm mb-6">
            {setItems.length > 0
              ? `Состав набора: ${setItems.map((item) => item.name).join(', ')}`
              : `Ингредиенты : ${ingredients.map((ingredient) => ingredient.name).join(', ')}`
            }
          </p>
        </div>

        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-50">
          <span className="text-[20px]">
            <b>{price} ₽</b>
          </span>

          <Button
            variant="secondary"
            className="font-bold cursor-pointer hover:brightness-90"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              toast.success(`${name} добавлен в корзину!`);
              handleAddProduct(productId);
            }}
          >
            <Plus
              size={20}
              className="mr-1"
            />
            Добавить
          </Button>
        </div>

      </Link>
    </div>
  );
}