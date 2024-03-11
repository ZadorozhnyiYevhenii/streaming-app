import React from "react";
import { UITabs } from "@/components/UIkit/UITabs/UITabs";
import { settingsItems } from "@/components/UIkit/UITabs/constants/settingsItems";
import "./layout.scss";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="settings">
      <h1 className="settings__title">Settings</h1>
      <div className="settings__tabs">
        <UITabs items={settingsItems} />
      </div>
      {children}
    </section>
  );
}
