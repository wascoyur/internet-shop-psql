import s from "./CPanelContent.module.css";
import { UserWidget } from "../user-widget/UsersWidget.tsx";

export const CPanelContent = () => {
  return (
    <div className={s.root}>
      <UserWidget />
    </div>
  );
};
