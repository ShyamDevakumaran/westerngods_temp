import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllItems, getHomeItemsImage, getProductById } from "../thunks/product";

export const productReducerInitialState = {
  homeItemsList: [],
  allItemsList: [],
  productInfo : {},
  masterInfo: null,
  isError: null,
  isLoading: false,
};

export const productReducer = createSlice({
  name: "productReducer",
  initialState: productReducerInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomeItemsImage.fulfilled, (state, action) => {
      state.homeItemsList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllItems.fulfilled, (state, action) => {
      state.allItemsList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.productInfo = action.payload;
      state.isLoading = false;
    });
    builder.addMatcher(
      isAnyOf(getHomeItemsImage.pending, getAllItems.pending, getProductById.pending),
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(getHomeItemsImage.rejected, getAllItems.rejected, getProductById.rejected),
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
      }
    );
    // builder.addMatcher(isAnyOf(getBanner.fulfilled), (state) => {
    //   state.masterInfo = null;
    //   state.isLoading = false;
    //   state.isError = false;
    // });
  },
});
