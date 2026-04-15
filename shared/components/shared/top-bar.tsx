import {Category} from "@/generated/prisma/client";
import {cn} from "@/shared/lib/utils";
import {Categories} from "@/shared/components/shared/categories";
import {Container} from "@/shared/components/shared/container";
import {SortPopup} from "@/shared/components/shared/sort-popup";

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar = ({categories, className}: Props) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className="flex items-center justify-between">
        <Categories items={categories} className="flex items-center justify-between" />
        <SortPopup/>
      </Container>
    </div>
  );
}