import { ItemMenu } from "../../app/types/sidebar.ts";
import s from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import "material-symbols";

type Props = {
  className?: string;
  list?: ItemMenu[];
};

export const Menu = (props: Props): React.ReactNode => {
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

  return items;
};
