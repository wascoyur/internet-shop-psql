import styles from "./CPanel.module.css";
import { listItems } from "../assets/mock/asideItems.ts";
import { SideBar } from "../widgets/sidebar/Sidebar.tsx";

export const ControlPanel = () => {
  return (
    <div className={styles.root}>
      <h2>Панель управления</h2>
      <SideBar list={listItems} />
    </div>
  );
};
