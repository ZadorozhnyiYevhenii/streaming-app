import { useState } from "react";
import { CopyButton } from "../CopyButton/CopyButton";
import { UIInput } from "../UIkit/UIInput/UIInput";
import { InputType } from "@/types/InputTypes";
import { UIButton } from "../UIkit/UIButton/UIButton";
import "./URLCard.scss";

export const URLCard = ({
  value,
  withPassword = false,
  title,
}: {
  value: string;
  withPassword: boolean;
  title: string;
}) => {
  const [inputType, setInputType] = useState<InputType>("password");

  const onShowPassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const type = withPassword ? inputType : "text";

  return (
    <section className="url-card">
      <h3
        className={`url-card__title ${
          withPassword ? "url-card__title--self" : ""
        }`}
      >
        {title}
      </h3>
      <div className="url-card__container">
        <div className="url-card__copy-wrap">
          {!withPassword && (
            <UIInput
              disabled
              value={value}
              height={3}
              labelWidth={100}
              inputType={type}
            />
          )}
          {withPassword && (
            <input className="url-card__input" type={type} defaultValue={value} />
          )}
          <CopyButton value={value} />
        </div>
        {withPassword && (
          <UIButton type="secondary" width="20%" onClick={onShowPassword}>
            {inputType === "password" ? "Show" : "Hide"}
          </UIButton>
        )}
      </div>
    </section>
  );
};
