'use client';

import {Product} from "@/generated/prisma/client";
import {Title} from "@/shared/components/shared/title";
import {ProductCard} from "@/shared/components/shared/product-card";
import {useEffect, useRef} from "react";
import {useIntersection} from "react-use";
import {useAppDispatch, useAppSelector} from "@/shared/store/store";
import {setActiveId} from "@/shared/store/features/categorySlice";

interface Props {
  categoryId: string;
  title: string;
  items: Product[];
  className?: string;
}

export const ProductsGroupList = ({
  categoryId,
  title,
  items,
  className
}: Props) => {
  const dispatch = useAppDispatch();
  const categoryActiveId = useAppSelector((state) => state.category.activeId);

  const intersectionRef = useRef<HTMLDivElement>(null);

  const intersection = useIntersection(intersectionRef, {
    threshold: 0.1,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      dispatch(setActiveId(categoryId));
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div
      className={className}
      ref={intersectionRef}
      id={categoryId}
    >
      <Title
        text={title}
        size="lg"
        className="font-extrabold mb-5"
      />

      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((product, index) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            ingredients={product.ingredients}
            setItems={product.setItems}
            weight={product.weight}
          />
        ))}
      </div>
    </div>
  );
}