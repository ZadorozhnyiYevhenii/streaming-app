import Link from "next/link";
import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import { HeaderRight } from "./HeaderRight/HeaderRight";
import { UISearch } from "../UIkit/UISearch/UISearch";
import { Logo } from "../UIkit/Logo/Logo";
import "./Header.scss";

export const Header = () => {

  return (
    <header className="header">
      <div className="header__left">
        <Link href={"/"}>
          <Logo />
        </Link>
        <HeaderNavigation />
      </div>

      <div className="header__search">
        <UISearch placeholder="Search" loading={false} />
      </div>

      <div className="header__right">
        <HeaderRight />
      </div>
    </header>
  );
};
