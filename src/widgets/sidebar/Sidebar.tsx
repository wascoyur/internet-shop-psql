import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";
import classNames from "classnames";
import { ItemMenu } from "../../app/types/sidebar.ts";
import "material-symbols";

type Props = {
  className?: string;
  list?: ItemMenu[];
};

export const SideBar = (props: Props) => {
  const { className, list } = props;

  const items = list?.map((i) => {
    return (
      <div className={classNames(s.link, className)} key={i.target}>
        <NavLink to={i.target} key={i.target}>
          <span className={classNames("material-symbols-sharp", s.icon)}>
            {i.iconName}
          </span>
          <span className={s.message}>{i.msg}</span>
        </NavLink>
      </div>
    );
  });

  return <div className={s.root}>{items}</div>;
};
