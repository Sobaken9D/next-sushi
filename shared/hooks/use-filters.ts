// хук отвечает за хранения состояния фильтраций

import {useSearchParams} from "next/navigation";
import {useMemo, useState} from "react";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {

}

export interface Filters {
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number | undefined) => void;
}

// хранит выбранные фильтры
export const useFilters = (): ReturnProps => {
  // берем из URL параметры (для перезагрузки)
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // useMemo нужен потому что в useQueryFilters мы передаем filters в массив зависимостей в useEffect.
  // Если в useFilters не использовать useMemo, то при каждом рендере компонента Filters:
  // 1) Создается новый объект filters (новая ссылка в памяти).
  // 2) useEffect в useQueryFilters видит, что ссылка изменилась (хотя значения внутри те же).
  // 3) Срабатывает router.push.
  // 4) router.push вызывает обновление состояния маршрута в Next.js.
  // 5) Компонент рендерится заново.
  // 6) Цикл повторяется.

  return useMemo(() => ({
    prices,
    setPrices: updatePrice
  }), [prices]);
}