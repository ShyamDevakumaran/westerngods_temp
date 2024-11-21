import { createAsyncThunk } from "@reduxjs/toolkit";
import productAPI from "../api/productAPI";
import { DispatchErrorHandler } from "../configs";
import secureLocalStorage from "react-secure-storage";

export const getHomeItemsImage = createAsyncThunk(
  "productReducer/getHomeItemsImage",
  async (payload = {}, { rejectWithValue }) => {
    try {
      let response = await productAPI.product.getHomeItemsImage();
      if (secureLocalStorage?.getItem("pref")?.token) {
        response = await productAPI.Authproduct.getHomeItemsImage();
      }
      return response?.data || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
export const getAllItems = createAsyncThunk(
  "productReducer/getAllItems",
  async (payload = {}, { rejectWithValue }) => {
    try {
      let response = await productAPI.product.getAllItems(payload?.index);
      if (secureLocalStorage?.getItem("pref")?.token) {
        response = await productAPI.Authproduct.getAllItems();
      }
      return response?.data || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
export const getProductById = createAsyncThunk(
  "productReducer/getProductById",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await productAPI.product.getProductById(payload?.id);

      return response?.data || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
