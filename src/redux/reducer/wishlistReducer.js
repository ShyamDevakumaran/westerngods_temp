import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
  addProductToWishlist,
  deleteProductFromWishlist,
  editWishlist,
  getWishlistProducts,
} from "../thunks/wishlist";

export const wishlistReducerInitialState = {
  wishlistItems: [],
  masterInfo: null,
  isError: null,
  isLoading: false,
};

export const wishlistReducer = createSlice({
  name: "wishlistReducer",
  initialState: wishlistReducerInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWishlistProducts.fulfilled, (state, action) => {
      state.wishlistItems = action.payload;
      state.isLoading = false;
    });

    builder.addMatcher(
      isAnyOf(
        getWishlistProducts.pending,
        addProductToWishlist.pending,
        deleteProductFromWishlist.pending,
        editWishlist.pending
      ),
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        getWishlistProducts.rejected,
        addProductToWishlist.rejected,
        deleteProductFromWishlist.rejected,
        editWishlist.rejected
      ),
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        addProductToWishlist.fulfilled,
        deleteProductFromWishlist.fulfilled,
        editWishlist.fulfilled
      ),
      (state) => {
        state.wishlistItems = [];
        state.isLoading = false;
        state.isError = false;
      }
    );
  },
});
