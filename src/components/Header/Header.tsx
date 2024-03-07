import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import { MoreInformation } from "./MoreInformation/MoreInformation";
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <HeaderNavigation />
      <MoreInformation />
    </header>
  );
};