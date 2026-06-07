import {cn} from "@/shared/lib/utils";

interface Props {
  price: number;
  quantity: number;
  className?: string;
}

export const CartItemDetailsPrice = ({price, quantity, className}: Props) => {
  return (
    <h2 className={cn('font-bold', className)}>{price * quantity} ₽</h2>
  );
}