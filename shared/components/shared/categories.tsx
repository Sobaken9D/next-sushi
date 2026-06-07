'use client';

import {Category} from "@/generated/prisma/client";
import {cn} from "@/shared/lib/utils";
import {useAppSelector} from "@/shared/store/hooks";

interface Props {
  items: Category[];
  className?: string;
}

export const Categories = ({items, className}: Props) => {
  const categoryActiveId = useAppSelector((state) => state.category.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        items.map(({name, id}, index) => (
          <a
            href={`#${id}`}
            key={id}
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5 cursor-pointer',
              categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
            )}
          >
            {name}
          </a>
        ))
      }
    </div>
  );
}