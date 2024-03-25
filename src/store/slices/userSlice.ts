import { IUser } from "@/types/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserType {
  user: IUser | null;
}

const initialState: UserType = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      (state.user as IUser).jwt = action.payload
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const {
  setUser,
  removeUser,
  setToken
} = userSlice.actions;

export const userReducer = userSlice.reducer;
