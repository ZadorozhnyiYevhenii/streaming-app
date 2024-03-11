"use client";

import { useState } from "react";
import Image from "next/image";
import defaultAvatar from "@/assets/default-avatar.png";
import { UIButton } from "../UIkit/UIButton/UIButton";
import { UIModal } from "../UIkit/UIModal/UIModal";
import "./AvatarLoader.scss";
import { UploadOutlined } from "@ant-design/icons";

export const AvatarLoader = () => {
  const [isImageLoaderOpen, setIsImageLoaderOpen] = useState(false);

  const onOk = () => {
    setIsImageLoaderOpen(false);
  };

  const onCancel = () => {
    setIsImageLoaderOpen(false);
  };

  const handleButtonClick = () => {
    setIsImageLoaderOpen(true);
  };

  return (
    <section className="avatar">
      <h2 className="avatar__title">Profile Picture</h2>
      <div className="avatar__container">
        <Image
          src={defaultAvatar}
          alt="Your avatar"
          className="avatar__image"
        />
        <div className="avatar__content">
          <UIButton onClick={handleButtonClick} type="secondary">
            Upload your avatar
          </UIButton>
          <p>Must be JPEG, PNG, or GIF</p>
          <UIModal
            onOk={onOk}
            onCancel={onCancel}
            open={isImageLoaderOpen}
            width={40}
          >
            <h3 className="avatar__upload-title">Upload Profile Picture</h3>
            <label className="avatar__uploader">
              <UploadOutlined className="avatar__download-icon" />
              <span className="avatar__file-title">Upload Photo</span>
              <input type="file" style={{ display: 'none' }} />
            </label>
          </UIModal>
        </div>
      </div>
    </section>
  );
};
