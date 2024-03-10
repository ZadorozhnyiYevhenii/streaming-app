import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  isLoginOpen: boolean;
}

const initialState: LoginState = {
  isLoginOpen: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    setIsLoginOpen: (state, action: PayloadAction<boolean>) => {
      state.isLoginOpen = action.payload;
    },
  },
});

export const { setIsLoginOpen } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
