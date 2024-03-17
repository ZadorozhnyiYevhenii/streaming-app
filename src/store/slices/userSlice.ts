import { IUser } from "@/types/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserType {
  user: IUser | null;
  token: string;
}

const initialState: UserType = {
  user: null,
  token: "",
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
    removeUser: (state, action) => {
      state.user = null;
    },
    removeToken: (state, action) => {
      state.token = "";
    },
  },
});

export const {
  setUser, setToken, removeToken, removeUser
} = userSlice.actions;

export const userReducer = userSlice.reducer;
