"use client";

import { useAppSelector } from "@/store/hooks";
import { ConnectModal } from "@/components/ConnectModal/ConnectModal";
import { URLCard } from "@/components/URLCard/URLCard";
import "./page.scss";

export default function Keys() {
  const { user } = useAppSelector(state => state.user);

  return (
    <main className="keys">
      <section className="keys__header">
        <h1 className="keys__title">Keys & URLs</h1>
        <ConnectModal />
      </section>
      <section className="keys__key-container">
        <URLCard
          value={user?.serverUrl || ""}
          title="Server URL"
          withPassword={false}
        />
        <URLCard
          value={user?.streamKey || ""}
          title="Stream Key"
          withPassword
        />
      </section>
    </main>
  );
}
