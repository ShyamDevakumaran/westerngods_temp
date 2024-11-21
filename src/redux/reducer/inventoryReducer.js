import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
    getAllCategory,
    getAllItems,
    getItemsById
} from "../thunks/inventory";

export const inventoryReducerInitialState = {
    itemsList: [],
    categoryList: [],
    inventoryInfo: null,
    isError: null,
    isLoading: false,
};

export const inventoryReducer = createSlice({
    name: "inventoryReducer",
    initialState: inventoryReducerInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllItems.fulfilled, (state, action) => {
            state.itemsList = action.payload;
            state.inventoryInfo = null;
            state.isLoading = false;
        });
        builder.addCase(getItemsById.fulfilled, (state, action) => {
            state.inventoryInfo = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getAllCategory.fulfilled, (state, action) => {
            state.categoryList = action.payload;
            state.inventoryInfo = null;
            state.isLoading = false;
        });
        builder.addMatcher(
            isAnyOf(
                getAllItems.pending,
                getItemsById.pending,
                getAllCategory.pending
            ),
            (state) => {
                state.isLoading = true;
            }
        );
        builder.addMatcher(
            isAnyOf(
                getAllItems.rejected,
                getItemsById.rejected,
                getAllCategory.rejected
            ),
            (state, action) => {
                state.isLoading = false;
                state.isError = true;
            }
        );
        builder.addMatcher(
            isAnyOf(getAllItems.fulfilled,
                getAllCategory.fulfilled
            ),
            (state) => {
                state.inventoryInfo = null;
                state.isLoading = false;
                state.isError = false;
            }
        );
    },
});