"use client"

import Link from "next/link";
import { FullscreenOutlined, KeyOutlined } from "@ant-design/icons";
import { StorageKeys } from "@/utils/storageKeys";


export const AsideBarDashboardList = () => {
  const id = localStorage.getItem(StorageKeys.USERID) as string;
  console.log(id)
  return (
    <ul className="dashboard-list">
      <li>
        <Link href={`/u/${id}`} className="dashboard-list__item">
          <FullscreenOutlined /> Stream Preview
        </Link>
      </li>
      <li>
        <Link href={`/u/${id}/keys`} className="dashboard-list__item">
          <KeyOutlined /> Keys & URLs
        </Link>
      </li>
    </ul>
  );
};
