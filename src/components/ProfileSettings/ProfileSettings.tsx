import { UIButton } from "../UIkit/UIButton/UIButton";
import { UIInput } from "../UIkit/UIInput/UIInput";
import "./ProfileSettings.scss";

export const ProfileSettings = () => {
  return (
    <section className="profile-settings">
      <div>
        <h2 className="profile-settings__title">Profile Settings</h2>
        <h3 className="profile-settings__subtitle">
          Change identifying details for your account
        </h3>
      </div>

      <div className="profile-settings__container">
        <label className="profile-settings__label">
          <span className="profile-settings__span">Username</span>
          <div className="profile-settings__input">
            <UIInput />
          </div>
        </label>

        <label className="profile-settings__label profile-settings__label--start">
          <span className="profile-settings__span">Bio</span>
          <div className="profile-settings__input">
            <UIInput height={6} />
          </div>
        </label>

        <div className="profile-settings__btn">
          <UIButton type="secondary">Save Changes</UIButton>
        </div>
      </div>
    </section>
  );
};
