import { changeUserStreamingInfo } from "@/api/fetchUser/changeUserStreamingInfo";
import { getUserById } from "@/api/fetchUser/getUserById";
import {
  IngressAudioEncodingPreset,
  IngressInput,
  IngressClient,
  IngressVideoEncodingPreset,
  RoomServiceClient,
  type CreateIngressOptions,
} from "livekit-server-sdk";
import { TrackSource } from "livekit-server-sdk/dist/proto/livekit_models";
import { StorageKeys } from "../src/utils/storageKeys";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL! || 'https://my-proj-h7lnfrzt.livekit.cloud',
  process.env.LIVEKIT_API_KEY! || 'API4BUDchzpdN7o',
  process.env.LIVEKIT_API_SECRET! || 'EZ2BrvMdx8BMRKvynXRPsebSBjCdgfxJ0j3HHLO56ua'
);

const ingressCLient = new IngressClient(process.env.LIVEKIT_API_URL! || 'https://my-proj-h7lnfrzt.livekit.cloud');

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
  const id = localStorage.getItem(StorageKeys.USERID);

  try {
    const user = await getUserById()
    await resetIngresses(id as string);

    const options: CreateIngressOptions = {
      name: user.username,
      roomName: id as string,
      participantName: user.username,
      participantIdentity: id as string,
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

    await changeUserStreamingInfo(
      {
        ingressId: ingress.ingressId,
        serverUrl: ingress.url,
        streamKey: ingress.streamKey,
      },
    );

    return ingress;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
