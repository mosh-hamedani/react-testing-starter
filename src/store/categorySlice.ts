import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "../entities";
import { RootState } from "./store";

export interface CategoryState {
  list: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk<Category[]>(
  "categories/fetch",
  async () => {
    const { data } = await axios.get("/categories");
    return data;
  }
);

export const createCategory = createAsyncThunk(
  "categories/create",
  async (name: string) => {
    const { data } = await axios.post("/categories", { name });
    return data;
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });
  },
  reducers: {},
});

export const categorySelector = (state: RootState) => state.category;

export default categorySlice.reducer;
