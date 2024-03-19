import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { loginReducer } from "./slices/loginSlice";
import { registerReducer } from "./slices/registerSlice";
import { userReducer } from "./slices/userSlice";
import { persistReducer } from "redux-persist";

const persistentConfig = {
  key: "root",
  version: 2,
  storage,
  whiteList: ["user"],
  blackList: ["login", "register"],
};


const persistedUserReducer = persistReducer(persistentConfig, userReducer);

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
