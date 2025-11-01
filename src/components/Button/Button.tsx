import React from "react";
import { CastomButton } from "./Button.styled";

type ButtonProps = {
  text: string;
  border: number;
  border_color: string;
  border_radius: number;
  hover_bg: string;
  bg: string;
  icon?: string;
  width: string;
  padding: string;
  disabled: boolean;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  border,
  border_color,
  border_radius,
  hover_bg,
  bg,
  icon,
  width,
  padding,
  disabled,
  onClick,
}) => {
  return (
    <CastomButton
      $border={border}
      $border_color={border_color}
      $border_radius={border_radius}
      $bg={bg}
      $width={width}
      onClick={onClick}
      $padding={padding}
      $disabled={disabled}
      $hover_bg={hover_bg}
    >
      {icon && <img src={icon} alt="icon" />}
      {text && text}
    </CastomButton>
  );
};

export default Button;
