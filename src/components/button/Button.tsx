import { FC, ReactNode } from "react";
export interface IButtonProps {
  children: ReactNode;
  className?: string;
}
const Button: FC<IButtonProps> = ({ children, className }) => {
  return (
    <>
      <button type="button" className={className}>
        {children}
      </button>
    </>
  );
};

export default Button;
