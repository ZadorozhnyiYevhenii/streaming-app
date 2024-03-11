"use client";

import { useEffect, useState } from "react";
import { VerticalLeftOutlined, VerticalRightOutlined } from "@ant-design/icons";
import "./AsideBar.scss";

export const AsideBar = () => {
  const [isAsideBarHidden, setIsAsideBarHidden] = useState(true);

  useEffect(() => {
    const storedValue = localStorage.getItem("isAsideBarHidden");
    setIsAsideBarHidden(storedValue ? JSON.parse(storedValue) : true);
  }, []);

  const handleHiddenClick = () => {
    setIsAsideBarHidden((prev: boolean) => {
      localStorage.setItem("isAsideBarHidden", JSON.stringify(!prev));
      return !prev;
    });
  };

  const user = false;

  return (
    <aside className={`aside ${!isAsideBarHidden ? "aside--hidden" : ""}`}>
      <div
        className={`aside__header ${
          !isAsideBarHidden ? "aside__header--hidden" : ""
        }`}
      >
        <h2
          className={`aside__title ${
            !isAsideBarHidden ? "aside__title--hidden" : ""
          }`}
        >
          {user ? "Your" : "Recommended channels"}
        </h2>

        <button onClick={handleHiddenClick}>
          {!isAsideBarHidden ? (
            <VerticalLeftOutlined />
          ) : (
            <VerticalRightOutlined />
          )}
        </button>
      </div>
    </aside>
  );
};
