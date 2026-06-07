import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    cart: cartReducer
  },
})

// Получаем типы стора и диспатча
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;