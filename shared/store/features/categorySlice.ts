import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CategoryState {
  activeId: string
}

const initialState: CategoryState = {
  activeId: 'cmnh9erxx0000kku2kyeysiow',
}

const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    // state — это текущее состояние (мутируем напрямую благодаря Immer)
    // action — содержит данные, которые мы передаем при вызове
    setActiveId: (state, action: PayloadAction<number>) => {
      state.activeId = action.payload;
    },
  },
});

export const {setActiveId} = categorySlice.actions;

export default categorySlice.reducer;