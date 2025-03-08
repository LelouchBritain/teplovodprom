import { axiosApiClient } from "@/helpers/axiosApiClient";
import { IProduct } from "@/interfaces/IProduct";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface State {
  posts: IProduct[];
  post: IProduct | null;
  error?: string | null;
  loading: boolean;
}

const initialState: State = {
  loading: false,
  post: null,
  posts: [],
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "fetch/products",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosApiClient.get<IProduct[]>("/products");
      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(
          err.response?.data?.message || "Ошибка при загрузке постов"
        );
      }
      throw err;
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "fetch/productById",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosApiClient.get<IProduct>(`/products/${id}`);
      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(
          err.response?.data?.message || "Ошибка при загрузке поста"
        );
      }
      throw err;
    }
  }
);

export const addProduct = createAsyncThunk(
  "add/product",
  async ({ payload, token }: { payload: FormData; token: string }) => {
    if (!(payload instanceof FormData)) {
      throw new Error("Payload должен быть экземпляром FormData");
    }
    if (!token) {
      throw new Error("Отсутствует токен для авторизации");
    }

    for (const pair of payload.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    const { data } = await axiosApiClient.post("/products", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "delete/product",
  async ({ id, token }: { id: string; token: string }, { rejectWithValue }) => {
    try {
      const { data } = await axiosApiClient.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { id, message: data.message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(
          err.response?.data?.message || "Ошибка при удалении продукта"
        );
      }
      throw err;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.post = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const productsReducer = productSlice.reducer;
