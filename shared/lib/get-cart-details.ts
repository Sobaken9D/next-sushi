import {CartStateItem} from "@/shared/store/features/cartSlice";
import {CartDto} from "@/shared/services/dto/cart.dto";



interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDto): ReturnProps => {
  const items = data.items.map((item) => ({
    id: item.id,
    name: item.productItem.name,
    quantity: item.quantity,
    imageUrl: item.productItem.imageUrl,
    price: item.productItem.price,
    disabled: false,
    weight: item.productItem.weight,
  }));

  return {
    items: items,
    totalAmount: data.totalAmount
  }
}