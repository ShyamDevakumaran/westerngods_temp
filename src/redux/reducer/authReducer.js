import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";
import {
  editProfileDetails,
  getMenuDetails,
  getProfileDetails,
  loginUser,
  logoutUser,
  otpVerify,
  signupUser,
} from "../thunks/auth";
import { toastsuccess } from "../../components/toast-style/toast-style";

const authInitialState = {
  authOtpVerify: {},
  AllMenuDetails: [],
  profileDetails: {},
  isError: null,
  isLoading: false,
};

export const authReducer = createSlice({
  name: "authReducer",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(otpVerify.fulfilled, (state, action) => {
      state.authOtpVerify = action.payload.data;
      state.isLoading = false;
      secureLocalStorage.setItem("pref", {
        pref: action.payload.data.preferences,
        token: action.payload.data.token,
        login_expiry: new Date(action.payload.data.login_expiry),
        email_verified: action.payload.data.email_verified,
        email: action.payload.data.email,
        name: action.payload.data.name,
      });
      toastsuccess("OTP verified and Logged in successfully");
      window.history.pushState(
        `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
        "/",
        `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`
      );
      window.location.reload();
    });
    builder.addCase(getMenuDetails.fulfilled, (state, action) => {
      state.AllMenuDetails = action.payload?.data;
      state.isLoading = false;
    });
    builder.addCase(getProfileDetails.fulfilled, (state, action) => {
      state.profileDetails = action.payload?.data;
      state.isLoading = false;
    });

    builder.addMatcher(
      isAnyOf(
        loginUser.pending,
        otpVerify.pending,
        signupUser.pending,
        logoutUser.pending,
        getMenuDetails.pending,
        getProfileDetails.pending,
        editProfileDetails.pending
      ),
      (state) => {
        state.isLoading = true;
      }
    );

    builder.addMatcher(
      isAnyOf(
        loginUser.rejected,
        otpVerify.rejected,
        signupUser.rejected,
        logoutUser.rejected,
        getMenuDetails.rejected,
        getProfileDetails.rejected,
        editProfileDetails.rejected
      ),
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        loginUser.fulfilled,
        signupUser.fulfilled,
        logoutUser.fulfilled,
        editProfileDetails.fulfilled
      ),
      (state) => {
        state.isLoading = false;
        state.isError = false;
      }
    );
  },
});
