"use client";

import { UIButton } from "../UIkit/UIButton/UIButton";
import { UIModal } from "../UIkit/UIModal/UIModal";
import { IngressInput } from "livekit-server-sdk";
import { useState, useTransition } from "react";
import { createIngress } from "../../../actions/ingress";
import { toast } from "sonner";
import { fetchUserInfo } from "@/api/fetchUser/fetchUserInfo";
import { UIDropDown } from "../UIkit/UIDropDown/UIDropDown";
import { DropDownOption } from "@/types/DropDownOption";
import "./ConnectModal.scss";

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

        <div className="modal-wrap">
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
        </div>
      </UIModal>
    </>
  );
};
