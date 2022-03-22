import React, { FC } from "react";
import "./Button.css";

export enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum Color {
  primary = "primary",
  secondary = "secondary",
  danger = "danger",
}
export interface ButtonProps {
  size?: Size;
  buttonColor?: Color;
  backgroundColor?: string;
  label: string;
}

export const Button: FC<ButtonProps> = ({
  label,
  buttonColor,
  size,
  backgroundColor,
  ...props
}) => {
  const styles = ["css-button"];
  buttonColor && styles.push(`css-button--${buttonColor}`);
  size && styles.push(`css-button--${size}`);

  return (
    <button className={styles.join(" ")} style={{ backgroundColor }} {...props}>
      {label}
    </button>
  );
};
