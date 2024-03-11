import {
  LogoutOutlined,
  SettingOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <button className="user-logout">
        <VideoCameraOutlined />
        Channel
      </button>
    ),
  },
  {
    key: "2",
    label: (
      <button className="user-logout">
        <SettingOutlined />
        Settings
      </button>
    ),
  },
  {
    key: "3",
    label: (
      <button className="user-logout">
        <LogoutOutlined /> Log out
      </button>
    ),
  },
];
