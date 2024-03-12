"use client";

import { UserOutlined } from "@ant-design/icons";
import { items } from "./constants";
import { UIDropDown } from "@/components/UIkit/UIDropDown/UIDropDown";
import { useAppDispatch } from "@/store/hooks";
import { MenuProps } from "antd";
import { setIsLoginOpen } from "@/store/slices/loginSlice";
import "./UserAccountNonAuth.scss";

export const UserAccountNonAuthorized = () => {
  const dispatch = useAppDispatch();

  const handleLoginClick: MenuProps["onClick"] = (e) => {
    if (e.key === "1") {
      dispatch(setIsLoginOpen(true));
    }
  };

  return (
    <UIDropDown items={items} onMenuItemClick={handleLoginClick}>
      <UserOutlined className="user-notauth" style={{ padding: "0.5rem" }} />
    </UIDropDown>
  );
};
