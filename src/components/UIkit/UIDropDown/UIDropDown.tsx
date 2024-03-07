import React from "react";
import { Dropdown, MenuProps, Space } from "antd";

export const UIDropDown = ({
  items,
  trigger = "click",
  children,
}: {
  items: MenuProps["items"];
  trigger?: "click" | "hover";
  children: React.ReactNode;
}) => {
  return (
    <Dropdown menu={{ items }} trigger={[trigger]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>{children}</Space>
      </a>
    </Dropdown>
  );
};
