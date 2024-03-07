import React from "react";
import { Dropdown, MenuProps, Space } from "antd";
import './UIDropDown.scss';

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
    <Dropdown menu={{ items }} trigger={[trigger]} className="ui-dropdown">
      <a onClick={(e) => e.preventDefault()}>
        <Space>{children}</Space>
      </a>
    </Dropdown>
  );
};
