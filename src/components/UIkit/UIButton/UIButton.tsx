import React from "react";
import { Button } from "antd";
import "./UIButton.scss";

export const UIButton = ({
  children,
  onClick,
  disabled = false,
  type = "primary",
  width = "100%",
  loading = false,
  htmlType = 'button'
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "primary" | "secondary";
  width?: string;
  loading?: boolean
  htmlType?: "submit" | "reset" | "button"
}) => {
  const buttonClass =
    type === "primary" ? "primary-button" : "secondary-button";

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`ui-button ${buttonClass} ${disabled ? 'ui-button--disabled' : ''}`}
      style={{ width: `${width}` }}
      loading={loading}
      htmlType={htmlType}
    >
      {children}
    </Button>
  );
};
