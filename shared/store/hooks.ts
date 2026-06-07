import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppState} from "@/shared/store/store";

// Создаем типизированные хуки с помощью .withTypes()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();