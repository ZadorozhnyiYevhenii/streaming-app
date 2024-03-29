"use client"

import { LiveKitRoom } from "@livekit/components-react";
import { Video } from "../Video/Video";
import { useAppSelector } from "@/store/hooks";

export const StreamPlayer = () => {
  const { user } = useAppSelector(state => state.user)

  // const { token } = useViewerToken(user.id)

  // console.log(token)

  if (!user) {
    return null;
  }

  return (
    <>
      <LiveKitRoom 
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        token={'dqdq'}
      >
        <Video hostIdentity={user.id} hostName={user.username} />
      </LiveKitRoom>
    </>
  );
};