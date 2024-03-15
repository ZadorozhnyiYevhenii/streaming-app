import { AsideBar } from "@/components/AsideBar/AsideBar";
import { KeyOutlined } from "@ant-design/icons";
import "./layout.scss";
import React from "react";

export default function DashBoardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AsideBar title="Dashboard" close={false}>
        <ul className="dashboard-list">
          <li className="dashboard-list__item">
            <KeyOutlined /> Keys & URLs
          </li>
        </ul>
      </AsideBar>
      {children}
    </>
  );
}
