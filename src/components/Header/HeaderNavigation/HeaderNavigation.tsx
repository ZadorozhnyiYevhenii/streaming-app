"use client";

import Link from "next/link";
import { navitems } from "../constants/navitems";
import "./HeaderNavigation.scss";
import { useAppSelector } from "@/store/hooks";

export const HeaderNavigation = () => {
  const { token } = useAppSelector(state => state.user)

  return (
    <ul className="header-navigation">
      {token
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
