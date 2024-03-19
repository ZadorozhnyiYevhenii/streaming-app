import {
  LogoutOutlined,
  SettingOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link href={"/chanel"} className="user-logout">
        <VideoCameraOutlined />
        Channel
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link href={"/settings/profile"} className="user-logout">
        <SettingOutlined />
        Settings
      </Link>
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
