"use client";

import { ConnectModal } from "@/components/ConnectModal/ConnectModal";
import { URLCard } from "@/components/URLCard/URLCard";
import { useEffect, useState } from "react";
import { IUser } from "@/types/IUser";
import { fetchUserInfo } from "@/api/fetchUser/fetchUserInfo";
import { UIButton } from "@/components/UIkit/UIButton/UIButton";
import { fetchUser } from "@/api/fetchUser/createUser";
import "./page.scss";

export default function Keys() {
  const [data, setData] = useState<IUser>();
  useEffect(() => {
    const fetch = async () => {
      try {
        const user = await fetchUserInfo();
    setData(user)
      } catch (error) {
        console.error(error)
      }
    }

    fetch();
  }, []);

  return (
    <main className="keys">
      <section className="keys__header">
        <h1 className="keys__title">Keys & URLs</h1>
        <ConnectModal />
      </section>
      <section className="keys__key-container">
        <URLCard
          value={data?.serverUrl || ""}
          title="Server URL"
          withPassword={false}
        />
        <URLCard
          value={data?.streamKey || ""}
          title="Stream Key"
          withPassword
        />
      </section>
      <UIButton width="10" onClick={fetchUser}>Fetch user</UIButton>
    </main>
  );
}
