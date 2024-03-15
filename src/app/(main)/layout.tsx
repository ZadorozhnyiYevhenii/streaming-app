import { AsideBar } from "@/components/AsideBar/AsideBar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = true;
  return (
    <>
      <AsideBar title={user ? "Your subscriptions" : "Recommended channels"}>
        <div>dqdq</div>
      </AsideBar>
      {children}
    </>
  )
}