"use client";

import { UIDropDown } from "@/components/UIkit/UIDropDown/UIDropDown";
import { MenuProps } from "antd";
import { items } from "./constants";
import { IUser } from "@/types/IUser";
import Image from "next/image";
import defaultAvatar from "@/assets/default-avatar.png";
import "./UserAccountAuth.scss";

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
        <Image className="user-auth" src={defaultAvatar} alt="default avatar" />
      ) : (
        <Image className="user-auth" src={defaultAvatar} alt="default avatar" />
      )}
    </UIDropDown>
  );
};
