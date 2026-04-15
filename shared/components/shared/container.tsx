import React from 'react';
import {cn} from "@/shared/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({className, children}: Props) => {
  return (
    <div className={cn('mx-auto max-w-[1265px]', className)}>{children}</div>
  );
};