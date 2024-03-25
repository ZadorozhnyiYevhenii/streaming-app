import { AvatarLoader } from "@/components/AvatarLoader/AvatarLoader";
import { ProfileSettings } from "@/components/ProfileSettings/ProfileSettings";
import "./Profile.scss";

export default function Profile() {

  return (
    <main className="profile">
      <AvatarLoader />
      <ProfileSettings />
    </main>
  );
}
