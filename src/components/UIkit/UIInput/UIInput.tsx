import { InputType } from "@/types/InputTypes";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
} from "react-hook-form";
import "./UIInput.scss";

interface UIInputProps<T extends FieldValues> {
  label?: string;
  height?: number;
  width?: number;
  disabled?: boolean;
  value?: string;
  labelWidth?: number;
  inputType?: InputType;
  name?: Path<T>;
  register?: UseFormRegister<T>;
  errorMessage?: FieldError | undefined;
  showEyeIcon?: boolean;
  onEyeClick?: () => void;
}

export const UIInput = <T extends FieldValues>({
  label,
  height,
  width,
  disabled = false,
  value,
  labelWidth,
  inputType = "text",
  name,
  register,
  errorMessage,
  showEyeIcon,
  onEyeClick,
}: UIInputProps<T>) => {
  const inputProps = {...(name && register ? register(name) : {})};

  const handleEyeClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (onEyeClick) {
      onEyeClick();
    }
  };

  return (
      <label className="ui-input-label" style={{ width: `${labelWidth}%` }}>
        {label}
        <input
          style={{ height: `${height}rem`, width: `${width}rem` }}
          disabled={disabled}
          value={value}
          type={inputType}
          className="ui-input"
          {...inputProps}
        />
        {showEyeIcon && (
          <button type="button" onClick={handleEyeClick} className="ui-input__icon">
            {inputType === "password" ? (
              <EyeInvisibleOutlined />
            ) : (
              <EyeOutlined />
            )}
          </button>
        )}
      </label>
  );
};
