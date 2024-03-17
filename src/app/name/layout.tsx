import { AsideBar } from "@/components/AsideBar/AsideBar";
import Link from "next/link";
import "./layout.scss";
import { dashboardItems } from "@/components/AsideBar/constants/dashboardItems";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AsideBar title="Dashboard" close={false}>
        <ul className="dashboard-list">
          {dashboardItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="dashboard-list__item">
                {item.icon} {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </AsideBar>
      {children}
    </>
  );
}
