import { TabsProps } from "antd";
import Link from "next/link";

export const settingsItems: TabsProps["items"] = [
  {
    key: "1",
    label: <Link href={'/settings/profile'} className="ui-tabs-link">Profile</Link>,
  },
  {
    key: "2",
    label: <Link href={'/'} className="ui-tabs-link">Chanel and videos</Link>,
  },
  {
    key: "3",
    label: <Link href={'/settings/notifications'} className="ui-tabs-link">Notifications</Link>
  }
]