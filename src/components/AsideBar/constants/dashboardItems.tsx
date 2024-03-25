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
    href: `/u/name`,
  },
  {
    id: 2, 
    title: "Keys & URLs", 
    icon: <KeyOutlined />,
    href: `/u/name/keys` 
  },
];
