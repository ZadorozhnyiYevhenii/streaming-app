import Link from "next/link";
import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { UserAccountNonAuthorized } from "./UserAccountNonAuth/UserAccountNonAuth";
import { UISearch } from "../UIkit/UISearch/UISearch";
import { Logo } from "../UIkit/Logo/Logo";
import { UserAccountAuthorized } from "./UserAccountAuth/UserAccountAuth";
import "./Header.scss";

export const Header = () => {
  const user = true;

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
        {user ? (
          <UserAccountAuthorized />
        ) : (
          <UserAccountNonAuthorized />
        )}
      </div>
    </header>
  );
};
