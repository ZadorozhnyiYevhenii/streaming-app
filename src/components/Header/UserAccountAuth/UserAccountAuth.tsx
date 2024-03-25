"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MenuProps } from "antd";
import { UIDropDown } from "@/components/UIkit/UIContextMenu/UIDropDown";
import { items } from "./constants";
import defaultAvatar from "@/assets/default-avatar.png";
import "./UserAccountAuth.scss";
import { useAppDispatch } from "@/store/hooks";
import { removeUser } from "@/store/slices/userSlice";
import { StorageKeys } from "../../../utils/storageKeys";

export const UserAccountAuthorized = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem(StorageKeys.USERID);

  const handleItemsClick: MenuProps["onClick"] = (e) => {
    if (e.key === "3") {
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USERID);
      dispatch(removeUser());
    }

    if (e.key === "1") {
      router.push(`/u/${userId}`);
    }
  };

  const avatar = false;

  return (
    <UIDropDown items={items} onMenuItemClick={handleItemsClick}>
      {avatar ? (
        <Image className="user-auth" src={defaultAvatar} alt="default avatar" />
      ) : (
        <Image className="user-auth" src={defaultAvatar} alt="default avatar" />
      )}
    </UIDropDown>
  );
};
