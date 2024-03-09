"use client";

import { useState } from "react";
import { UIButton } from "../UIkit/UIButton/UIButton";
import { UIModal } from "../UIkit/UIModal/UIModal";
import './Register.scss';
import { UIInput } from "../UIkit/UIInput/UIInput";
import { Titles } from "./constants";

export const Register = () => {
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
      <UIButton onClick={handleButtonClick}>
        Register
      </UIButton>
      <UIModal onOk={onOk} onCancel={onCancel} open={isModalOpen}>
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
