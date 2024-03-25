"use client";

import { UIModal } from "../UIkit/UIModal/UIModal";
import { UIButton } from "../UIkit/UIButton/UIButton";
import { UIInput } from "../UIkit/UIInput/UIInput";
import { Titles } from "./constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsLoginOpen } from "@/store/slices/loginSlice";
import { setIsRegisterOpen } from "@/store/slices/registerSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "@/types/IUser";
import { loginUser } from "@/api/auth/loginUser";
import { useEffect, useState } from "react";
import { InputType } from "@/types/InputTypes";
import "./Login.scss";
import { setToken } from "@/store/slices/userSlice";
import { StorageKeys } from "../../utils/storageKeys";

export const Login = () => {
  const { isLoginOpen } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const [inputType, setInputType] = useState<InputType>('password');

  const onInputTypeChange = () => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isLoading, errors },
  } = useForm<Pick<IUser, "username" | "password">>();

  useEffect(() => {
    if (user) {
      setValue("username", user.username);
      setValue("password", user.password);
    }
  }, [user]);

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

  const handleLogin: SubmitHandler<
    Pick<IUser, "username" | "password">
  > = async (data) => {
    try {
      const token = await loginUser(data);
      dispatch(setIsRegisterOpen(false));
      dispatch(setIsLoginOpen(false));
      dispatch(setToken(token));
      localStorage.setItem(StorageKeys.TOKEN, token)
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <UIButton onClick={handleButtonClick} type="secondary">
        Log in
      </UIButton>
      <UIModal onOk={onOk} onCancel={onCancel} open={isLoginOpen}>
        <h1 className="login-title">Log in to service</h1>
        <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
          <UIInput
            label={Titles.USERNAME}
            name="username"
            register={register}
            errorMessage={errors.username}
          />
          <UIInput
            label={Titles.PASSWORD}
            name="password"
            register={register}
            errorMessage={errors.password}
            showEyeIcon
            onEyeClick={onInputTypeChange}
            inputType={inputType}
          />
          <UIButton htmlType="submit" loading={isLoading}>
            Log in
          </UIButton>
        </form>
        <h2 className="login-signup" onClick={handleRegisterOpen}>
          Don`t have an account? Sign up
        </h2>
      </UIModal>
    </>
  );
};
