import { AsideBar } from "@/components/AsideBar/AsideBar";
import { AsideBarDashboardList } from "@/components/AsideBar/AsideDashBoardList/AsideBarDashboardList";
import "./layout.scss";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AsideBar title="Dashboard" close={false}>
        <AsideBarDashboardList />
      </AsideBar>
      {children}
    </>
  );
}
