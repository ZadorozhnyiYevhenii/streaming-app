import dynamic from "next/dynamic";
import { UILoader } from "../UILoader/UILoader";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => <UILoader />,
});

export const UIPlayer = () => {
  return (
    <>
      <DynamicReactPlayer
        width="500px"
        height="400px"
        url={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
        controls={true}
        light={true}
        pip={true}
      />
      <source
        src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
        type="video/mp4"
      />
    </>
  );
};
