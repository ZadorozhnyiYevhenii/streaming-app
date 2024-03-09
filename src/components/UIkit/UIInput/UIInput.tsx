import { Input } from "antd";
import "./UIInput.scss";

export const UIInput = ({
  label
}: {
  label: string
}) => {
  return (
    <label className="ui-input-label">
      {label}
      <Input />
    </label>
  );
};
