import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { UserAccountNonAuthorized } from "./UserAccountNonAuthorized/UserAccountNonAuthorized";
import { UISearch } from "../UIkit/UISearch/UISearch";
import { Logo } from "../UIkit/Logo/Logo";
import Link from "next/link";
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
        <Login />
        <Register />
        <UserAccountNonAuthorized />
      </div>
    </header>
  );
};
