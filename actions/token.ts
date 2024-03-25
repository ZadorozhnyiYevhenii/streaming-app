"use client";

import { getUserById } from "@/api/fetchUser/getUserById";
import { useAppSelector } from "@/store/hooks";
import { AccessToken } from "livekit-server-sdk";

export const createViewerToken = async (hostIdentity: string) => {
  const {id, token: jwt} = useAppSelector(state => state.user);
  const self = await getUserById(id, jwt);

  const host = await getUserById(id, jwt);
  const isHost = self.id === host.id;

  const token = new AccessToken(
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!,
    {
      identity: isHost ? `host-${self.id}` : self.id,
      name: self.username,
    }
  );

  token.addGrant({
    room: host.id,
    roomJoin: true,
    canPublish: false,
    canPublishData: true,
  });

  return await Promise.resolve(token.toJwt());
};