import { IUser } from "@/types/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserType {
  user: IUser | null;
  token: string;
  loginInfo: Pick<IUser, "username" | "password"> | null;
}

const initialState: UserType = {
  user: null,
  token: "",
  loginInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    removeToken: (state) => {
      state.token = "";
    },
    setLoginInfo: (
      state,
      action: PayloadAction<Pick<IUser, "username" | "password">>
    ) => {
      state.loginInfo = action.payload;
    },
  },
});

export const { setUser, setToken, removeToken, removeUser, setLoginInfo } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
