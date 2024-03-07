"use client";

import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { items } from "./constants";
import { UIDropDown } from "@/components/UIkit/UIDropDown/UIDropDown";

export const UserAccountNonAuthorized = () => {
  return (
    <UIDropDown items={items}>
      <UserOutlined />
    </UIDropDown>
  );
};
