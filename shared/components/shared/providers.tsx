'use client';

import {ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "@/shared/store/store";

interface Props {
  children: ReactNode;
}

export const Providers = ({children}: Props) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}