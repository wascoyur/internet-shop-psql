import classNames from "classnames";
import s from "./Sidebar.module.css";

interface SideBarProps {
  children?: React.ReactNode;
  className?: string;
}
export const SideBar = ({
  children,
  className,
}: SideBarProps): React.ReactNode => {
  return <div className={classNames(s.root, className)}>{children}</div>;
};
