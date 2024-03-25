"use client";

import React from "react";
import { UITabs } from "@/components/UIkit/UITabs/UITabs";
import { settingsItems } from "@/components/UIkit/UITabs/constants/settingsItems";
import { usePathname } from "next/navigation";
import "./layout.scss";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const currentSettingPage = pathname.split("/").at(-1) || "";

  const activeTab = settingsItems?.find(
    (item) => item.key === currentSettingPage
  );

  const activeKey = activeTab ? activeTab.key : "";

  return (
    <section className="settings">
      <h1 className="settings__title">Settings</h1>
      <div className="settings__tabs">
        <UITabs
          items={settingsItems}
          activeKey={activeKey}
        />
      </div>
      {children}
    </section>
  );
}
