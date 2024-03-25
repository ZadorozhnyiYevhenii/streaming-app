import { StorageKeys } from "@/utils/storageKeys";
import { TabsProps } from "antd";
import Link from "next/link";

const id = localStorage.getItem(StorageKeys.USERID);

export const settingsItems: TabsProps["items"] = [
  {
    key: "profile",
    label: <Link href={'/settings/profile'} className="ui-tabs-link">Profile</Link>,
  },
  {
    key: "chanel",
    label: <Link href={`/u/${id}`} className="ui-tabs-link">Chanel and videos</Link>,
  },
  {
    key: "notifications",
    label: <Link href={'/settings/notifications'} className="ui-tabs-link">Notifications</Link>
  }
]