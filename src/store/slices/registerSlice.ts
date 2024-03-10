import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RegisterType {
  isRegisterOpen: boolean;
}

const initialState: RegisterType = {
  isRegisterOpen: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    setIsRegisterOpen: (state, action: PayloadAction<boolean>) => {
      state.isRegisterOpen = action.payload;
    },
  },
});

export const { setIsRegisterOpen } = registerSlice.actions;

export const registerReducer = registerSlice.reducer;
