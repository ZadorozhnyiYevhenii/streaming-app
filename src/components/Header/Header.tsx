import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import { Login } from "../Login/Login";
import './Header.scss';

export const Header = () => {

  return (
    <header className="header">
      <HeaderNavigation />
      <Login />
    </header>
  );
};