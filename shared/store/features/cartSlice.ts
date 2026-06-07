import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Api} from "@/shared/services/api-client";
import {getCartDetails} from "@/shared/lib/get-cart-details";
import {
  CreateCartItemDto,
  DeleteCartItemDto,
  UpdateCartItemQuantityDto
} from "@/shared/services/dto/cart.dto";

export type CartStateItem = {
  id: string;
  name: string;
  quantity: number;
  imageUrl: string;
  weight: number;
  price: number;
  disabled?: boolean;
}

export interface CartState {
  items: CartStateItem[];
  error: boolean;
  loading: boolean;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  error: false,
  loading: false,
  totalAmount: 0,
}

export const fetchStore = createAsyncThunk(
  'cart/fetchStore',
  async () => {
    try {
      return await Api.cart.getCart();
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Ошибка загрузки cartStore в агрегаторе Redux');
    }
  }
);

export const removeCartItem = createAsyncThunk(
  'cart/removeCartItem',
  async ({id}: DeleteCartItemDto) => {
    try {
      return Api.cart.removeCartItem({id});
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Ошибка удаления элемента корзины в агрегаторе Redux');
    }
  }
);

export const addCartItem = createAsyncThunk(
  'cart/addCartItem',
  async ({productItemId}: CreateCartItemDto) => {
    try {
      return Api.cart.addCartItem({productItemId});
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Ошибка удаления элемента корзины в агрегаторе Redux');
    }
  }
);

export const updateItemQuantity = createAsyncThunk(
  'cart/updateCartItemQuantity',
  async ({id, quantity}: UpdateCartItemQuantityDto) => {
    try {
      return await Api.cart.updateCartItemQuantity({id: id, quantity: quantity});
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Ошибка обновления элемента корзины в агрегаторе Redux');
    }
  }
);

export const useCartStore = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ПОЛУЧЕНИЕ
    builder
      .addCase(fetchStore.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchStore.fulfilled, (state, action) => {
        state.loading = false;

        Object.assign(state, getCartDetails(action.payload));
      })
      .addCase(fetchStore.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })

      // УДАЛЕНИЕ
      .addCase(removeCartItem.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.loading = false;

        Object.assign(state, getCartDetails(action.payload));
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })

      // ДОБАВЛЕНИЕ
      .addCase(addCartItem.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.loading = false;

        Object.assign(state, getCartDetails(action.payload));
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })

      // ОБНОВЛЕНИЕ
      .addCase(updateItemQuantity.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateItemQuantity.fulfilled, (state, action) => {
        state.loading = false;

        Object.assign(state, getCartDetails(action.payload));
      })
      .addCase(updateItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
  }
})

export default useCartStore.reducer;