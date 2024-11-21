import { createAsyncThunk } from "@reduxjs/toolkit";
import masterAPI from "../api/masterAPI";
import { DispatchErrorHandler } from "../configs";


export const getBanner = createAsyncThunk(
  "masterReducer/getBanner",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await masterAPI.master.getBanner(payload);
      return response?.data || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);

export const getOfferSlide = createAsyncThunk(
  "masterReducer/getOfferSlide",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await masterAPI.master.getOfferSlide(payload);
      return response?.data || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);

export const createContactDetails = createAsyncThunk(
  "masterReducer/createContactDetails",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await masterAPI.master.createContactDetails(payload);
      return response?.data || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);