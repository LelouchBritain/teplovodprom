import { IUser } from "@/interfaces/IUser";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { axiosApiClient } from "@/helpers/axiosApiClient";

export interface UserState {
  user?: IUser;
  loading?: boolean;
  registerError?: string;
  loginError?: string;
}

export interface UserRequest {
  username: string;
  token?: string;
}

interface UserResponseError {
  message: string;
  error: string;
  statusCode: number;
}

export const registerUser = createAsyncThunk<IUser, FormData>(
  "user/register",
  async (payload: FormData, { rejectWithValue }) => {
    try {
      const { data } = await axiosApiClient.post<IUser>("users", payload);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data) {
          const errorResponse: UserResponseError = error.response.data;
          return rejectWithValue(errorResponse.message);
        }
        rejectWithValue("An error occured");
      }
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk<IUser, UserRequest>(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axiosApiClient.post<IUser>(
        "users/sessions",
        userData
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data) {
          const errorResponse: UserResponseError = error.response.data;
          return rejectWithValue(errorResponse.message);
        }
        rejectWithValue("An error occured");
      }
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosApiClient.delete("users/logout", {});
      console.log(data);

      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.data) {
          const errorResponse: UserResponseError = err.response.data;
          console.log(errorResponse);
          return rejectWithValue(errorResponse.message);
        }
        return rejectWithValue("An error occurred");
      }

      throw err;
    }
  }
);

const initialState: UserState = {
  loading: false,
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.registerError = undefined;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        if (typeof action.payload === "string") {
          state.registerError = action.payload;
        } else {
          state.registerError = "Something went wrong";
        }
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.loginError = undefined;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        if (typeof action.payload === "string") {
          state.loginError = action.payload;
        } else {
          state.loginError = "Something went wrong";
        }
        state.loading = false;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      });
  },
});

export const userReducer = userSlice.reducer;
