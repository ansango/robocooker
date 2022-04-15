import Icon from "components/common/Icons/Icon";
import { FC } from "react";
import ButtonProps from "./ButtonProps";

import * as cn from "./ButtonStyles";

/**
 * Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows
 */

const Button: FC<ButtonProps> = ({
  label,
  size = "base",
  kind = "solid",
  style = "default",
  rounded = "default",
  icon,
  classButton,
  disabled = false,
  action,
  classIcon,
  fullWidth = false,
  ...props
}) => {
  const cnKind = kind === "solid" ? cn.solid : cn.outline;
  const cnFullWidth = fullWidth ? cn.fullWidth : "";
  const mode = `flex items-center justify-between ${cnKind[style]} ${cn.size[size]} ${cn.rounded[rounded]} ${cnFullWidth}`;
  const styles = classButton ?? mode;
  const className = disabled ? `${styles} ${cn.disabled}` : styles;
  const iconLabel = icon ? "ml-2.5" : "";
  const reSize = size === "xsmall" || size === "small" ? "xsmall" : "small";
  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={action}
      {...props}
    >
      {icon && <Icon icon={icon} kind={kind} />}
      <span className={iconLabel}>{label}</span>
    </button>
  );
};

export default Button;
