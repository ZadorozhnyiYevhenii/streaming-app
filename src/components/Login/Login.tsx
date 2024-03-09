"use client";

import { UIModal } from "../UIkit/UIModal/UIModal";
import { useState } from "react";
import { UIButton } from "../UIkit/UIButton/UIButton";
import { UIInput } from "../UIkit/UIInput/UIInput";
import "./Login.scss";
import { Titles } from "./constants";

export const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOk = () => {
    setIsModalOpen(false);
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <UIButton onClick={handleButtonClick} type="secondary">
        Log in
      </UIButton>
      <UIModal onOk={onOk} onCancel={onCancel} open={isModalOpen}>
        <h1 className="login-title">Log in to service</h1>
        <form className="login-form">
          <UIInput label={Titles.EMAIL} />
          <UIInput label={Titles.PASSWORD} />
          <UIButton>Log in</UIButton>
        </form>
      </UIModal>
    </>
  );
};
