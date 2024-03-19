"use client";

import React, { useEffect, useState } from "react";
import { VerticalLeftOutlined, VerticalRightOutlined } from "@ant-design/icons";
import "./AsideBar.scss";

export const AsideBar = ({
  children,
  title,
  close = true
}: {
  children: React.ReactNode;
  title: string;
  close?: boolean
}) => {
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
          {title}
        </h2>

        {close && (
          <button onClick={handleHiddenClick}>
          {!isAsideBarHidden ? (
            <VerticalLeftOutlined />
          ) : (
            <VerticalRightOutlined />
          )}
        </button>
        )}
      </div>
      {children}
    </aside>
  );
};
