import React, { FC } from "react";
import "./ButtonIcon.css";

export enum DeleteSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum DeleteColor {
  delete = "delete",
  check = "check"
}

export interface ButtonIconProps {
  size?: DeleteSize;
  buttonColor?: DeleteColor;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  buttonColor,
  size,
  ...props
}) => {
  const styles = ["css-button-icon"];
  buttonColor && styles.push(`css-button-icon--${buttonColor}`);
  size && styles.push(`css-button-icon--${size}`);

  return (
    <button className={styles.join(" ")} {...props}></button>
  );
};
