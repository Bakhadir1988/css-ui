import React, { FC } from 'react';
import './Button.css'

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export enum Color {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger'
}

export interface ButtonProps {
  size?: Size;
  buttonColor?: Color;
  backgroundColor?: string;
  label: string;
}

const Button: FC<ButtonProps> = ({
  label,
  buttonColor,
  size,
  backgroundColor,
  ...props
}) => {
  const modeSize = size ? `css-button--${size}` : '';
  const modeButtonColor = buttonColor ? `css-button--${buttonColor}` : '';
  return (
    <button
      className={['css-button', `${modeSize}`, `${modeButtonColor}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
