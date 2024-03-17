import { FullscreenOutlined, KeyOutlined } from "@ant-design/icons";

interface DashboardItems {
  id: number;
  title: string;
  icon: JSX.Element;
  href: string
}

export const dashboardItems: DashboardItems[] = [
  {
    id: 1,
    title: "Stream Preview",
    icon: <FullscreenOutlined />,
    href: `/fc3c2c24-60d9-4e2a-951a-ac60bbec7348`,
  },
  {
    id: 2, 
    title: "Keys & URLs", 
    icon: <KeyOutlined />,
    href: `/name/keys` 
  },
];
