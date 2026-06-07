import {cn} from "@/shared/lib/utils";

interface Props {
  name: string;
  weight: number;
  className?: string;
}

export const CartItemDetailsInfo = ({weight, name, className}: Props) => {
  return (
    <div>
      <div className={cn('flex items-center justify-between', className)}>
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      {weight && <p className="text-sm mt-1 font-bold text-gray-500">{weight} г</p>}
    </div>
  )
}