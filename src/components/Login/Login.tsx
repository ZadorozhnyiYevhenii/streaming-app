"use client";

import { UIModal } from "../UIModal/UIModal";
import { useState } from "react";
import { UIButton } from "../UIButton/UIButton";

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
      <UIButton onClick={handleButtonClick}>Log in</UIButton>
      <UIModal onOk={onOk} onCancel={onCancel} open={isModalOpen}>
        <p>Modal is open!</p>
      </UIModal>
    </>
  );
};
