"use client";

import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { items } from "./constants";
import { UIDropDown } from "@/components/UIkit/UIDropDown/UIDropDown";
import "./UserAccountNonAuthorized.scss";

export const UserAccountNonAuthorized = () => {
  return (
    <UIDropDown items={items}>
      <UserOutlined className="user-notauth" style={{ padding: "0.5rem" }} />
    </UIDropDown>
  );
};
