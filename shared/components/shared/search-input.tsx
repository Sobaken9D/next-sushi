import React from 'react';
import {Search} from "lucide-react";
import {cn} from "@/shared/lib/utils";

interface Props {
  className?: string;
}

// input растягивается за счет flex flex-1 у родителя и w-full у input

export const SearchInput: React.FC<Props> = ({className}) => {
  return (
    <div className={cn("flex rounded-2xl flex-1 rounded-2xl justify-between relative h-11 z-30 ", className)}>
      <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
      <input type="text"
             placeholder="Искать блюда..."
             className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
      />
    </div>
  );
}