import styles from "./CPanel.module.css";
import { listItems } from "../assets/mock/asideItems.ts";
import { SideBar } from "../widgets/sidebar/Sidebar.tsx";
import { Menu } from "../widgets/menu/Menu.tsx";
import classNames from "classnames";
import { CPanelContent } from "../widgets/cpanel-content/CPanelContent.tsx";

export const ControlPanelPage = () => {
  return (
    <div className={styles.root}>
      <header>Панель управления</header>
      <aside>
        <SideBar className={classNames(styles.leftSidebar)}>
          <Menu list={listItems} />
        </SideBar>
      </aside>
      <main>
        <CPanelContent />
      </main>
    </div>
  );
};
