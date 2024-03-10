"use client";

import { useState } from "react";
import { UIButton } from "../UIkit/UIButton/UIButton";
import { UIModal } from "../UIkit/UIModal/UIModal";
import { UIInput } from "../UIkit/UIInput/UIInput";
import { Titles } from "./constants";
import './Register.scss';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsRegisterOpen } from "@/store/slices/registerSlice";

export const Register = () => {
  const { isRegisterOpen } = useAppSelector(state => state.register);
  const dispatch = useAppDispatch();

  const onOk = () => {
    dispatch(setIsRegisterOpen(false))
  };

  const onCancel = () => {
    dispatch(setIsRegisterOpen(false))
  };

  const handleButtonClick = () => {
    dispatch(setIsRegisterOpen(true))
  };
  return (
    <>
      <UIButton onClick={handleButtonClick}>
        Register
      </UIButton>
      <UIModal onOk={onOk} onCancel={onCancel} open={isRegisterOpen}>
        <h1 className="register-title">Join service today</h1>
        <form className="register-form">
          <UIInput label={Titles.USERNAME} />
          <UIInput label={Titles.PASSWORD} />
          <UIInput label={Titles.DATE_OF_BIRTH} />
          <UIInput label={Titles.PHONE_NUMBER} />
          <UIButton>Register</UIButton>
        </form>
      </UIModal>
    </>
  );
};
