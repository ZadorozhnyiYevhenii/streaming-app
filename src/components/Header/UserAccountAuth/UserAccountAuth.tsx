"use client";

import { UIDropDown } from "@/components/UIkit/UIDropDown/UIDropDown";
import { UserOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { items } from "./constants";
import { IUser } from "@/types/IUser";

const user: Pick<IUser, "avatar"> = {
  avatar: false,
};

export const UserAccountAuthorized = () => {
  const handleLogoutClick: MenuProps["onClick"] = (e) => {
    if (e.key === "3") {
      console.log("Log out");
    }
  };

  return (
    <UIDropDown items={items} onMenuItemClick={handleLogoutClick}>
      {user.avatar ? (
        <div>ddqdq</div>
      ) : (
        <UserOutlined className="user-notauth" style={{ padding: "0.5rem" }} />
      )}
    </UIDropDown>
  );
};
