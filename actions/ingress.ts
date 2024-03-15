"use server";

import { changeUserStreamingInfo } from "@/api/fetchUser/changeUserStreamingInfo";
import { fetchUserInfo } from "@/api/fetchUser/fetchUserInfo";
import {
  IngressAudioEncodingPreset,
  IngressInput,
  IngressClient,
  IngressVideoEncodingPreset,
  RoomServiceClient,
  type CreateIngressOptions,
} from "livekit-server-sdk";
import { TrackSource } from "livekit-server-sdk/dist/proto/livekit_models";
import { revalidatePath } from "next/cache";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

const ingressCLient = new IngressClient(process.env.LIVEKIT_API_URL!);

export const resetIngresses = async (hostIdentity: string) => {
  const ingresses = await ingressCLient.listIngress({
    roomName: hostIdentity,
  });

  const rooms = await roomService.listRooms([hostIdentity]);

  for (const room of rooms) {
    await roomService.deleteRoom(room.name);
  }

  for (const ingress of ingresses) {
    if (ingress.ingressId) {
      await ingressCLient.deleteIngress(ingress.ingressId);
    }
  }
};

export const createIngress = async (ingressType: IngressInput) => {
  try {
    const user = await fetchUserInfo();
    await resetIngresses(user.id);

    const options: CreateIngressOptions = {
      name: user.username,
      roomName: user.id,
      participantName: user.username,
      participantIdentity: user.id,
    };

    if (ingressType === IngressInput.WHIP_INPUT) {
      options.bypassTranscoding = true;
    } else {
      options.video = {
        source: TrackSource.CAMERA,
        preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
      };
      options.audio = {
        source: TrackSource.MICROPHONE,
        preset: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS,
      };
    }

    const ingress = await ingressCLient.createIngress(ingressType, options);

    if (!ingress || !ingress.url || !ingress.streamKey) {
      console.log("error in ingress file");
      throw new Error("Failed to create ingress");
    }

    await changeUserStreamingInfo({
      ingressId: ingress.ingressId,
      serverUrl: ingress.url,
      streamKey: ingress.streamKey,
    });

    // TODO: post on user info update

    revalidatePath(`/name/keys`);
    return ingress;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
