import React from "react";
import { Dropdown, MenuProps, Space } from "antd";
import "./UIDropDown.scss";

export const UIDropDown = ({
  items,
  trigger = "click",
  children,
  onMenuItemClick,
}: {
  items: MenuProps["items"];
  trigger?: "click" | "hover";
  children: React.ReactNode;
  onMenuItemClick?: MenuProps["onClick"];
}) => {
  return (
    <Dropdown
      menu={{ items, onClick: onMenuItemClick }}
      trigger={[trigger]}
      className="ui-dropdown"
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>{children}</Space>
      </a>
    </Dropdown>
  );
};
