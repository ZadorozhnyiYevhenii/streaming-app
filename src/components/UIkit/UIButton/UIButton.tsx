import React from "react";
import { Button } from "antd";
import "./UIButton.scss";

export const UIButton = ({
  children,
  onClick,
  disabled = false,
  type = "primary",
  width = '100%'
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "primary" | "secondary";
  width?: string
}) => {
  const buttonClass =
    type === "primary" ? "primary-button" : "secondary-button";

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`ui-button ${buttonClass}`}
      style={{ width: `${width}` }}
    >
      {children}
    </Button>
  );
};
