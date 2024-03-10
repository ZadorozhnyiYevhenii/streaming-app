import Image from "next/image";
import logo from "@/assets/twitch-seeklogo.svg";

export const Logo = () => {
  return <Image src={logo} alt="Twitch logo" width={30} height={30} />;
};
