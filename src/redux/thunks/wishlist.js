import { createAsyncThunk } from "@reduxjs/toolkit";
import { DispatchErrorHandler } from "../configs";
import wishListAPI from "../api/wishListAPI";

export const addProductToWishlist = createAsyncThunk(
  "wishlistReducer/addProductToWishlist",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await wishListAPI.wishlist.addProductToWishlist(payload);

      return response?.data || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
export const getWishlistProducts = createAsyncThunk(
  "wishlistReducer/getWishlistProducts",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await wishListAPI.wishlist.getWishlistProducts();

      return response?.data || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
export const deleteProductFromWishlist = createAsyncThunk(
  "wishlistReducer/deleteProductFromWishlist",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await wishListAPI.wishlist.deleteProductFromWishlist(
        payload?.id
      );

      return response?.data || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
export const editWishlist = createAsyncThunk(
  "wishlistReducer/editWishlist",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await wishListAPI.wishlist.editWishlist(
        payload?.id,
        payload?.editData
      );

      return response?.data || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
