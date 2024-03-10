"use client";

import { UserOutlined } from "@ant-design/icons";
import { items } from "./constants";
import { UIDropDown } from "@/components/UIkit/UIDropDown/UIDropDown";
import "./UserAccountNonAuthorized.scss";
import { useAppDispatch } from "@/store/hooks";
import { MenuProps } from "antd";
import { setIsLoginOpen } from "@/store/slices/loginSlice";

export const UserAccountNonAuthorized = () => {
  const dispatch = useAppDispatch();

  const handleLoginClick: MenuProps["onClick"] = (e) => {
    if (e.key === "2") {
      dispatch(setIsLoginOpen(true));
    }
  };

  return (
    <UIDropDown items={items} onMenuItemClick={handleLoginClick}>
      <UserOutlined className="user-notauth" style={{ padding: "0.5rem" }} />
    </UIDropDown>
  );
};
