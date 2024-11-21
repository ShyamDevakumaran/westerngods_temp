import { createAsyncThunk } from "@reduxjs/toolkit";
import inventoryAPI from "../api/inventoryAPI";
import { DispatchErrorHandler } from "../configs";


export const getAllItems = createAsyncThunk(
    "inventoryReducer/getAllItems",
    async (payload = {}, { rejectWithValue }) => {
        try {
            const response = await inventoryAPI.inventory.getAllItems(payload);
            return response?.data || null;
        } catch (error) {
            DispatchErrorHandler(error);
            return rejectWithValue(error);
        }
    }
);


export const getItemsById = createAsyncThunk(
    "inventoryReducer/getItemsById",
    async (payload = {}, { rejectWithValue }) => {
        try {
            const response = await inventoryAPI.inventory.getItemsByID(payload);
            return response?.data || null;
        } catch (error) {
            DispatchErrorHandler(error);
            return rejectWithValue(error);
        }
    }
);


export const getAllCategory = createAsyncThunk(
    "inventoryReducer/getAllCategory",
    async (payload = {}, { rejectWithValue }) => {
        try {
            const response = await inventoryAPI.inventory.getAllCategory(payload);
            return response?.data || null;
        } catch (error) {
            DispatchErrorHandler(error);
            return rejectWithValue(error);
        }
    }
);