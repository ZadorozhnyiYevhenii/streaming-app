import { ConnectionState, Track } from "livekit-client";
import {
  useConnectionState,
  useRemoteParticipant,
  useTracks,
} from "@livekit/components-react";

export const Video = ({
  hostIdentity,
  hostName,
}: {
  hostIdentity: string;
  hostName: string;
}) => {
  // const connectionState = useConnectionState();
  // const participant = useRemoteParticipant(hostIdentity);
  // const tracks = useTracks([
  //   Track.Source.Camera,
  //   Track.Source.Microphone,
  // ]).filter((track) => track.participant.identity === hostIdentity);

  // let content;

  // if (!participant && connectionState === ConnectionState.Connected) {
  //   content = <p>Offline</p>
  // } else if (!participant || tracks.length === 0) {
  //   content = <p>Loading</p>
  // } else {
  //   content = <p>Live video</p>
  // }

  return (
    <div>
      dq
dqdqdqdq    </div>
  );
};
