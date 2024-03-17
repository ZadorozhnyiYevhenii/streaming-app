"use server";

import { fetchUserInfo } from "@/api/fetchUser/fetchUserInfo";
import { AccessToken } from "livekit-server-sdk";


export const createViewerToken = async (hostIdentity: string) => {
  const self = await fetchUserInfo();

  const host = await fetchUserInfo();
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