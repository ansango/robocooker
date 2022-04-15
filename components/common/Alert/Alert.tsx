/**
 * ?Alert Component
 */

import { FC, useState } from "react";
// import ButtonIcon from "../Button/ButtonIcon/ButtonIcon";
import Icon from "../Icons/Icon";
import AlertProps from "./AlertProps";

import * as cn from "./AlertStyles";

/**
 * Show contextual information to your users using alert elements based on Tailwind CSS
 */

const Alert: FC<AlertProps> = ({
  kind = "info",
  bordered = false,
  dismissable = false,
  opened = false,
  withIcon = false,
  icon,
  text,
  link,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(opened);
  if (!isOpen) return null;
  const isBorder = bordered ? cn.alertBorderKind[kind] : cn.alertKind[kind];
  return (
    <div
      className={`${cn.alertBase} ${isBorder}`}
      role="alert"
      data-testid="alert"
    >
      {/* {withIcon && icon && (
        <Icon icon={icon} classIcon={cn.iconAlert} kind="solid" />
      )} */}
      <div className={`${cn.textBase} ${cn.textKind[kind]}`}>
        {text}
        <span
          className={`${cn.linkBase} ${cn.linkKind[kind]} cursor-pointer`}
          onClick={link?.action}
        >
          {link?.text}
        </span>
      </div>
      {/* {dismissable && (
        <ButtonIcon
          icon="XIcon"
          classButton={`${cn.btnCloseBase} ${cn.btnCloseKind[kind]}`}
          classIcon={cn.iconClose}
          action={() => setIsOpen(false)}
          data-testid="dismiss-button"
        />
      )} */}
    </div>
  );
};

export default Alert;
