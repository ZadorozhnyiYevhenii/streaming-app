"use client";

import { useState } from "react";
import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import { UIButton } from "../UIkit/UIButton/UIButton";

export const CopyButton = ({ value }: { value: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    if (!value) {
      return;
    }

    setIsCopied(true);
    navigator.clipboard.writeText(value);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <UIButton type="secondary" onClick={onCopy} width="10">
      {isCopied ? <CheckOutlined /> : <CopyOutlined />}
    </UIButton>
  );
};
