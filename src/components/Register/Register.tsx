"use client";

import { useState } from "react";
import { UIButton } from "../UIkit/UIButton/UIButton";
import { UIModal } from "../UIkit/UIModal/UIModal";

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
      <UIButton onClick={handleButtonClick} type="secondary">
        Register
      </UIButton>
      <UIModal onOk={onOk} onCancel={onCancel} open={isModalOpen}>
        <p>This is modal</p>
      </UIModal>
    </>
  );
};
