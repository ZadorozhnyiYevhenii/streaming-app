"use client";

import { UIModal } from "../UIkit/UIModal/UIModal";
import { UIButton } from "../UIkit/UIButton/UIButton";
import { UIInput } from "../UIkit/UIInput/UIInput";
import { Titles } from "./constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsLoginOpen } from "@/store/slices/loginSlice";
import "./Login.scss";
import { setIsRegisterOpen } from "@/store/slices/registerSlice";

export const Login = () => {
  const { isLoginOpen } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  const onOk = () => {
    dispatch(setIsLoginOpen(false));
  };

  const onCancel = () => {
    dispatch(setIsLoginOpen(false));
  };

  const handleButtonClick = () => {
    dispatch(setIsLoginOpen(true));
  };

  const handleRegisterOpen = () => {
    dispatch(setIsRegisterOpen(true));
    dispatch(setIsLoginOpen(false));
  };

  return (
    <>
      <UIButton onClick={handleButtonClick} type="secondary">
        Log in
      </UIButton>
      <UIModal onOk={onOk} onCancel={onCancel} open={isLoginOpen}>
        <h1 className="login-title">Log in to service</h1>
        <form className="login-form">
          <UIInput label={Titles.EMAIL} />
          <UIInput label={Titles.PASSWORD} />
          <UIButton>Log in</UIButton>
        </form>
        <h2 className="login-signup" onClick={handleRegisterOpen}>
          Don`t have an account? Sign up
        </h2>
      </UIModal>
    </>
  );
};
