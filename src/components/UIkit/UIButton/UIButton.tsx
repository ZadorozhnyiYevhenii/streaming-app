import React from "react";
import { Button } from "antd";
import "./UIButton.scss";

export const UIButton = ({
  children,
  onClick,
  disabled = false,
  type = "primary",
}: {
  children?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  type?: "primary" | "secondary";
}) => {
  const buttonClass =
    type === "primary" ? "primary-button" : "secondary-button";

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`ui-button ${buttonClass}`}
    >
      {children}
    </Button>
  );
};
