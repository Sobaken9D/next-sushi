'use client';

import {Title} from "@/shared/components/shared/title";
import {RangeSlider} from "@/shared/components/shared/range-slider";
import {Input} from "@/shared/components/ui/input";
import {useFilters, useQueryFilters} from "@/shared/hooks";
import {
  ResetFiltersButton
} from "@/shared/components/shared/reset-filters-button";

import {useRouter} from "next/navigation";
import {Button} from "@/shared/components/ui/button";
import {cn} from "@/shared/lib/utils";
import React from "react";

interface Props {
  className?: string;
  filterPrices: {
    minPrice: number;
    maxPrice: number;
  }
}

export const Filters = ({className, filterPrices}: Props) => {
  const filters = useFilters();
  const minPrice = filterPrices.minPrice;
  const maxPrice = filterPrices.maxPrice;

  // слушает изменение цен
  useQueryFilters(filters);

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  const resetFilters = () => {
    // тут меняет цены и т.к в useQueryFilters отслеживаются изменения цен, то и ссылка меняется
    filters.setPrices('priceFrom', undefined);
    filters.setPrices('priceTo', undefined);
    // TODO: РЕШИТЬ ПРОБЛЕМУ ПЕРЕХОДА СНАЧАЛА http://localhost:3000/?priceFrom=1250&priceTo=3555# а потом http://localhost:3000
    window.location.hash = '';
  };

  return (
    <div className={className}>
      <Title
        text="Фильтрация"
        size="sm"
        className="mb-5 font-bold"
      />

      {/*Фильтр цен*/}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder={`от ${minPrice}`}
            min={minPrice}
            max={maxPrice}
            value={String(filters.prices.priceFrom || "")}
            onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder={`до ${maxPrice}`}
            min={minPrice}
            max={maxPrice}
            value={String(filters.prices.priceTo || "")}
            onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={minPrice}
          max={maxPrice}
          step={10}
          value={[filters.prices.priceFrom || minPrice, filters.prices.priceTo || maxPrice]}
          onValueChange={updatePrices}
        />
      </div>

      <ResetFiltersButton
        className={"mt-5"}
        onClick={resetFilters}
      />
    </div>
  );
}