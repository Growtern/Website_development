import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
  token: null,
  isAuthenticated: false,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // Store admin information and token after successful login
    loginSuccess: (state, action) => {
      state.admin = action.payload.admin;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },

    // Store admin information after /me verification
    setAdmin: (state, action) => {
      state.admin = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },

    // Used while checking authentication
    setAuthLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Clear authentication state
    logout: (state) => {
      state.admin = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const {
  loginSuccess,
  setAdmin,
  setAuthLoading,
  logout,
} = authSlice.actions;

export default authSlice.reducer;


      //            Browser Refresh
      //                  ↓
      //         Redux Persist
      //                  ↓
      //         Restore token
      //                  ↓
      //  isAuthenticated = false
      //         loading = true
      //                  ↓
      //               /me
      //             ↙      ↘
      //         Valid      Invalid
      //           ↓           ↓
      //     setAdmin()      logout()
      //           ↓           ↓
      //   isAuthenticated   isAuthenticated
      //        = true           = false
      //           ↓              ↓
      //     loading=false   loading=false