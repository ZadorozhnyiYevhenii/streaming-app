"use client";

import { Select, Space } from "antd";
import { UIButton } from "../UIkit/UIButton/UIButton";
import { UIModal } from "../UIkit/UIModal/UIModal";
import { IngressInput } from "livekit-server-sdk";
import { useState, useTransition } from "react";
import { createIngress } from "../../../actions/ingress";
import { toast } from "sonner";
import { fetchUserInfo } from "@/api/fetchUser/fetchUserInfo";
import { UIDropDown } from "../UIkit/UIDropDown/UIDropDown";
import { DropDownOption } from "@/types/DropDownOption";

const RTMP = String(IngressInput.RTMP_INPUT);
const WHIP = String(IngressInput.WHIP_INPUT);

const options: DropDownOption[] = [
  { value: RTMP, label: "RTMP" },
  { value: WHIP, label: "WHIP" },
];

type IngressType = typeof RTMP | typeof WHIP;

export const ConnectModal = () => {
  const [isPending, startTransition] = useTransition();
  const [isClicked, setIsClicked] = useState(false);
  const [ingressType, setIngressType] = useState<IngressType>(RTMP);

  const onSubmit = () => {
    startTransition(() => {
      createIngress(parseInt(ingressType))
        .then(() => {
          fetchUserInfo();
          toast.success("Ingress created");
          console.log("Success");
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  // const s = async () => {
  //   startTransition(async () => {
  //     try {
  //       const response = await createIngress(parseInt(ingressType));
  //       const ingressId = response.ingressId;
  //       const serverUrl = response.url;
  //       const streamKey = response.streamKey;
  //       const ch = await changeStreamInfo({ ingressId, serverUrl, streamKey });
  //       console.log("data connect modal" ,ch)
  //       return ch;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })
  // };

  const handleButtonClick = () => {
    setIsClicked(true);
  };

  const onOk = () => {
    setIsClicked(false);
  };

  const onCancel = () => {
    setIsClicked(false);
  };

  return (
    <>
      <UIButton width="15" onClick={handleButtonClick}>
        Generate collection
      </UIButton>
      <UIModal onOk={onOk} onCancel={onCancel} open={isClicked}>
        <h2 className="keys__modal-title">Generate collection</h2>
        <Space wrap style={{ width: "100%" }}>
          <Select
            style={{ width: "100%" }}
            disabled={isPending}
            onChange={(value) => setIngressType(value)}
            options={[
              { value: RTMP, label: "RTMP" },
              { value: WHIP, label: "WHIP" },
            ]}
          />
        </Space>

        <UIDropDown
          disabled={isPending}
          onChange={(value) => setIngressType(value)}
          options={options}
        />

        <div className="keys__modal-btns">
          <UIButton width="30" type="secondary" onClick={onCancel}>
            Cancel
          </UIButton>
          <UIButton width="30" onClick={onSubmit} disabled={isPending}>
            Generate
          </UIButton>
        </div>
      </UIModal>
    </>
  );
};
