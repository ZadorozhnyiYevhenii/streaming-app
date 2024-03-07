import React from "react";
import { Modal } from "antd";
import './UIModal.scss';

export const UIModal = ({
  children,
  onOk,
  onCancel,
  open,
  width = '50%'
}: {
  children: React.ReactNode;
  onOk: () => void;
  onCancel: () => void;
  open: boolean;
  width?: string
}) => {

  return (
    <Modal
      onOk={onOk}
      onCancel={onCancel}
      open={open}
      footer={null}
      className='ui-modal'
      style={{ backgroundColor: 'black'}}
      width={width}
    >
      {children}
    </Modal>
  );
};
