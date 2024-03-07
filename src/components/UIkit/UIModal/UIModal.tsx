import { Modal } from "antd";
import React from "react";

export const UIModal = ({
  children,
  onOk,
  onCancel,
  open,
  type = "primary",
}: {
  children: React.ReactNode;
  onOk: () => void;
  onCancel: () => void;
  open: boolean;
  type?: "primary";
}) => {
  const buttonStyles = type === "primary" ? "primary" : null;

  return (
    <Modal
      onOk={onOk}
      onCancel={onCancel}
      open={open}
      footer={null}
      className="ui-modal"
    >
      {children}
    </Modal>
  );
};
