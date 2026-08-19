import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  persistStore,
  persistReducer,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import authReducer from "./slices/authSlice";

// Auth Persist Configuration
const authPersistConfig = {
  key: "auth",
  storage,

  // Only persist these two properties
  whitelist: ["token", "admin"],
};

// Persisted Auth Reducer
const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);

// Root Reducer
const rootReducer = combineReducers({
  auth: persistedAuthReducer,
});

// Redux Store
export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
          "persist/FLUSH",
          "persist/SET",
        ],
      },
    }),
});

// Redux Persistor
export const persistor = persistStore(store);