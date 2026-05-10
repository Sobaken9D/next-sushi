import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import categoryReducer from "./features/categorySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer
  },
})

// Получаем типы стора и диспатча
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Создаем типизированные хуки с помощью .withTypes()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();