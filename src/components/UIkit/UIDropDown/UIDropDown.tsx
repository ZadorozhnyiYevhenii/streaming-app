import { DropDownOption } from "@/types/DropDownOption";
import { Select, Space } from "antd";
import './UIDropDown.scss';

export const UIDropDown = ({
  disabled,
  onChange,
  options,
}: {
  disabled?: boolean;
  onChange: (value: string) => void;
  options: DropDownOption[];
}) => {
  return (
    <Space wrap>
      <Select
        style={{ width: "100%" }}
        disabled={disabled}
        onChange={onChange}
        options={options}
      />
    </Space>
  );
};
