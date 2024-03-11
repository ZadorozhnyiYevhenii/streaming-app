import { Tabs, TabsProps } from "antd";
import './UITabs.scss';

export const UITabs = ({ items }: { items: TabsProps["items"] }) => {
  return <Tabs defaultActiveKey="1" items={items} />;
};
