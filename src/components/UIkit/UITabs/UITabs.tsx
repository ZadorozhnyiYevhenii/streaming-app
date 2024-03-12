import { Tabs, TabsProps } from "antd";
import "./UITabs.scss";

export const UITabs = ({
  items,
  activeKey,
}: {
  items: TabsProps["items"];
  activeKey: string;
}) => {
  return <Tabs items={items} activeKey={activeKey} />;
};
