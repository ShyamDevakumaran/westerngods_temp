import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { createContactDetails, getBanner, getOfferSlide } from "../thunks/master";

export const masterReducerInitialState = {
  bannerList: [],
  offerList: [],
  masterInfo: null,
  isError: null,
  isLoading: false,
};

export const masterReducer = createSlice({
  name: "masterReducer",
  initialState: masterReducerInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBanner.fulfilled, (state, action) => {
      state.bannerList = action.payload;
      state.masterInfo = null;
      state.isLoading = false;
    });
    builder.addCase(getOfferSlide.fulfilled, (state, action) => {
      state.offerList = action.payload;
      state.masterInfo = null;
      state.isLoading = false;
    });
    builder.addMatcher(isAnyOf(
      getBanner.pending,
      getOfferSlide.pending,
      createContactDetails.pending
    ), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(
      getBanner.rejected,
      getOfferSlide.rejected,
      createContactDetails.rejected
    ), (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addMatcher(isAnyOf(
      getBanner.fulfilled,
      getOfferSlide.fulfilled,
      createContactDetails.fulfilled
    ), (state) => {
      state.masterInfo = null;
      state.isLoading = false;
      state.isError = false;
    });
  },
});
