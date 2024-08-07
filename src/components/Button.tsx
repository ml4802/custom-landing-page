import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  onClickAlert: () => void;
}

let color = "red";
const Button = ({ children, onClickAlert }: Props) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      color={color}
      onClick={onClickAlert}
    ></button>
  );
};

export default Button;
