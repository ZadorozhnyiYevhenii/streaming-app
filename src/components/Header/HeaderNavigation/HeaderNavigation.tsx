import Link from "next/link";
import { navitems } from "../constants/navitems";
import './HeaderNavigation.scss';

export const HeaderNavigation = () => {
  return (
    <ul className="header-navigation">
      {navitems.map((item) => (
        <li key={item.id} className="header-navigation__item">
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
