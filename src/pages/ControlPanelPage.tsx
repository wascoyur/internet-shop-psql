import styles from "./CPanelPage.module.css";
import { listItems } from "../assets/mock/asideItems.ts";
import { SideBar } from "../widgets/sidebar/Sidebar.tsx";
import { MenuItems } from "../widgets/menu/MenuItems.tsx";
import classNames from "classnames";
import { CPanelContent } from "../widgets/cpanel-content/CPanelContent.tsx";

export const ControlPanelPage = () => {
  return (
    <div className={styles.root}>
      <header>Панель управления</header>
      <aside>
        <SideBar className={classNames(styles.leftSidebar)}>
          <MenuItems list={listItems} />
        </SideBar>
      </aside>
      <main>
        <CPanelContent />
      </main>
    </div>
  );
};
