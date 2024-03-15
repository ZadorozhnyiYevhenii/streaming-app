import { Input } from "antd";
import "./UIInput.scss";
import { InputType } from "@/types/InputTypes";

export const UIInput = ({
  label,
  height,
  width,
  disabled = false,
  value,
  labelWidth,
  inputType = "text"
}: {
  label?: string;
  height?: number;
  width?: number;
  disabled?: boolean;
  value?: string;
  labelWidth?: number;
  inputType?: InputType
}) => {
  return (
    <label className="ui-input-label" style={{ width: `${labelWidth}%` }}>
      {label}
      <Input
        style={{ height: `${height}rem`, width: `${width}rem` }}
        disabled={disabled}
        value={value}
        type={inputType}
      />
    </label>
  );
};
