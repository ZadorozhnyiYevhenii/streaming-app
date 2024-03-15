"use client";

import { UIDropDown } from "@/components/UIkit/UIContextMenu/UIDropDown";
import { MenuProps } from "antd";
import { items } from "./constants";
import { IUser } from "@/types/IUser";
import Image from "next/image";
import defaultAvatar from "@/assets/default-avatar.png";
import "./UserAccountAuth.scss";


export const UserAccountAuthorized = () => {
  const handleLogoutClick: MenuProps["onClick"] = (e) => {
    if (e.key === "3") {
      console.log("Log out");
    }
  };

  const avatar = false

  return (
    <UIDropDown items={items} onMenuItemClick={handleLogoutClick}>
      {avatar ? (
        <Image className="user-auth" src={defaultAvatar} alt="default avatar" />
      ) : (
        <Image className="user-auth" src={defaultAvatar} alt="default avatar" />
      )}
    </UIDropDown>
  );
};
