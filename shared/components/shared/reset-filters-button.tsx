import React from 'react';
import {Button} from "@/shared/components/ui/button";
import {cn} from "@/shared/lib/utils";

interface Props {
  className?: string;
  onClick?: () => void;
}

export const ResetFiltersButton = ({className, onClick}: Props) => {
  return (
    <Button
      size="default"
      variant={"outline"}
      className={cn('cursor-pointer', className)}
      onClick={onClick}
    >Сбросить фильтры</Button>
  );
};