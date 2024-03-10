import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { UserAccountNonAuthorized } from "./UserAccountNonAuthorized/UserAccountNonAuthorized";
import { UISearch } from "../UIkit/UISearch/UISearch";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <HeaderNavigation />

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
