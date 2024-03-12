import { Input } from "antd";
import "./UIInput.scss";

export const UIInput = ({
  label,
  height,
  width,
}: {
  label?: string;
  height?: number;
  width?: number;
}) => {
  return (
    <label className="ui-input-label">
      {label}
      <Input style={{ height: `${height}rem`, width: `${width}rem` }} />
    </label>
  );
};
