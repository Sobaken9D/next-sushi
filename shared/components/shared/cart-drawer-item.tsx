import {cn} from "@/shared/lib/utils";
import * as CartItem from './cart-item-details';
import {Trash2Icon} from "lucide-react";
import {
  CartItemDetailsProps
} from "@/shared/components/shared/cart-item-details/cart-item-details.types";

interface Props extends CartItemDetailsProps{
  onClickCountButton?: (type: 'plus' | 'minus') => void;
  onClickRemove?: () => void;
  className?: string,
}

export const CartDrawerItem = ({
  imageUrl,
  name,
  weight,
  price,
  quantity,
  disabled,
  className,
  onClickCountButton,
  onClickRemove,
}: Props) => {
  return (
    <div
      className={cn(
        'flex bg-white p-5 gap-6',
        {
          'opacity-50 pointer-events-none': disabled,
        },
        className,
      )}
    >
      <CartItem.Image src={imageUrl} />

      <div className="flex-1">
        <CartItem.Info
          name={name}
          weight={weight}
        />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CartItem.CountButton
            value={quantity}
            onClick={onClickCountButton}
          />

          <div className="flex items-center gap-3">
            <CartItem.Price
              price={price}
              quantity={quantity}
            />
            <Trash2Icon
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
              onClick={onClickRemove}
            />
          </div>
        </div>
      </div>
    </div>
  );
}