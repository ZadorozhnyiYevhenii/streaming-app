"use client";

import { useState } from "react";
import classNames from "classnames";
import { MoreOutlined } from "@ant-design/icons";
import { infoList } from "./constants/infoList";
import "./MoreInformation.scss";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export const MoreInformation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOpen = () => {
    setIsClicked((prev) => !prev);
  };


  return (
    <div className="more">
      <MoreOutlined className="more__icon" onClick={handleOpen} />

      <ul
        className={classNames("more__list", {
          "more__list--active": isClicked,
        })}
      >
        {infoList.map((info) => (
          <li key={info.id} className="more__item">
            {info.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
