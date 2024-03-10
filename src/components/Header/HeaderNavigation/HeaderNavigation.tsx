import Link from "next/link";
import { navitems } from "../constants/navitems";
import "./HeaderNavigation.scss";

export const HeaderNavigation = () => {
  const user = true;

  return (
    <ul className="header-navigation">
      {user
        ? navitems.map(({ id, link, title }) => (
            <li key={id} className="header-navigation__item">
              <Link href={link}>{title}</Link>
            </li>
          ))
        : navitems
            .filter((user) => !user.auth)
            .map(({ id, link, title }) => (
              <li key={id} className="header-navigation__item">
                <Link href={link}>{title}</Link>
              </li>
            ))}
    </ul>
  );
};
