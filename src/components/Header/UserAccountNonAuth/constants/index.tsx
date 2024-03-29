import { LoginOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <button className="user-logout">
        <LoginOutlined /> Log in
      </button>
    ),
  },
];
