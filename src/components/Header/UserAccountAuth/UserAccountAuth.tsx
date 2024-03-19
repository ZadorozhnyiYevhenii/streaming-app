"use client";

import { UIDropDown } from "@/components/UIkit/UIContextMenu/UIDropDown";
import { MenuProps } from "antd";
import { items } from "./constants";
import Image from "next/image";
import defaultAvatar from "@/assets/default-avatar.png";
import "./UserAccountAuth.scss";
import { useAppDispatch } from "@/store/hooks";
import { removeToken } from "@/store/slices/userSlice";

export const UserAccountAuthorized = () => {
  const dispatch = useAppDispatch();

  const handleLogoutClick: MenuProps["onClick"] = (e) => {
    if (e.key === "3") {
      dispatch(removeToken())
    }
  };

  const avatar = false;

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
