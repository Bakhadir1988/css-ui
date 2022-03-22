import React, { FC } from "react";
import "./Icon.css";

export interface IconProps {
  color?: string
  size?: string
  name: string
}

export const Icon: FC<IconProps> = ({
  name,
  color,
  size,
  ...props
}) => {
  
  const styles = ["fa"];
  name && styles.push(`fa-${name}`);

  const iconStyle = {
    color: `${color}`,
    fontSize: `${size}`,
  };

  return (
    <i style={iconStyle} className={styles.join(" ")} {...props}></i>
  );
};
