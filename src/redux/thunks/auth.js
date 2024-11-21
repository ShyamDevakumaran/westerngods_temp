import { createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../api/authAPI";
import { DispatchErrorHandler } from "../configs";

export const loginUser = createAsyncThunk(
  "authReducer/loginUser",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await authAPI.authUser.loginUser(payload);
      return response || null;
    } catch (error) {
      // payload?.setError(error?.response?.data?.error_detail);
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);

export const otpVerify = createAsyncThunk(
  "authReducer/otpVerify",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await authAPI.authUser.otpVerify(payload);
      return response || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
export const signupUser = createAsyncThunk(
  "authReducer/signupUser",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await authAPI.authUser.signupUser(payload);
      return response || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "authReducer/logoutUser",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await authAPI.authUser.logoutUser();
      return response || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
export const getMenuDetails = createAsyncThunk(
  "authReducer/getMenuDetails",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await authAPI.authUser.getMenuDetails();
      return response || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
export const getProfileDetails = createAsyncThunk(
  "authReducer/getProfileDetails",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await authAPI.authUser.getProfileDetails(payload?.email);
      return response || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
export const editProfileDetails = createAsyncThunk(
  "authReducer/editProfileDetails",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await authAPI.authUser.getProfileDetails(
        payload?.email,
        payload?.putData
      );
      return response || null;
    } catch (error) {
      DispatchErrorHandler(error);
      return rejectWithValue(error);
    }
  }
);
