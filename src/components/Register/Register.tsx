"use client";

import { UIButton } from "../UIkit/UIButton/UIButton";
import { UIModal } from "../UIkit/UIModal/UIModal";
import { UIInput } from "../UIkit/UIInput/UIInput";
import { Titles } from "./constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsRegisterOpen } from "@/store/slices/registerSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "@/types/IUser";
import { registerUser } from "@/api/auth/registerUser";
import { setUser } from "@/store/slices/userSlice";
import "./Register.scss";
import { setIsLoginOpen } from "@/store/slices/loginSlice";
import { StorageKeys } from "../../utils/storageKeys";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm<IUser>();
  const dispatch = useAppDispatch();
  const { isRegisterOpen } = useAppSelector((state) => state.register);

  const onOk = () => {
    dispatch(setIsRegisterOpen(false));
  };

  const onCancel = () => {
    dispatch(setIsRegisterOpen(false));
  };

  const handleButtonClick = () => {
    dispatch(setIsRegisterOpen(true));
  };

  const handleRegister: SubmitHandler<IUser> = async (data) => {
    try {
      const id = await registerUser(data);

      dispatch(setUser(data));
      dispatch(setIsRegisterOpen(false));
      dispatch(setIsLoginOpen(true));
      localStorage.setItem(StorageKeys.USERID, id)
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <UIButton onClick={handleButtonClick}>Register</UIButton>
      <UIModal onOk={onOk} onCancel={onCancel} open={isRegisterOpen}>
        <h1 className="register-title">Join service today</h1>
        <form className="register-form" onSubmit={handleSubmit(handleRegister)}>
          <UIInput
            label={Titles.USERNAME}
            name="username"
            register={register}
            errorMessage={errors.username}
          />
          <UIInput
            label={Titles.EMAIL}
            name="email"
            register={register}
            errorMessage={errors.email}
          />
          <UIInput
            label={Titles.PASSWORD}
            name="password"
            register={register}
            errorMessage={errors.password}
          />
          <UIButton htmlType="submit" loading={isLoading}>
            Register
          </UIButton>
        </form>
      </UIModal>
    </>
  );
};
