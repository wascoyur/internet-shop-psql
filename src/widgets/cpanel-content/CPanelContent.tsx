import s from "./CPanelContent.module.css";
import widget from "../user-widget/UserWiget.module.css";
import { users } from "../../assets/mock/crud-users.ts";

export const CPanelContent = () => {
  return (
    <div className={s.root}>
      <UserWidget />
    </div>
  );
};

const UserWidget = () => {
  const list = users;
  const headers = Object.keys(users[0]);

  return (
    <div className={widget.root}>
      <h4>User wiget CRUD operation</h4>
      <Headers headers={headers} />
      <div className={widget.header}></div>
    </div>
  );
};

const Headers = ({ headers }: { headers: string[] }) => {
  const result = headers.map((h) => {
    return <div className={widget.item}>{h}</div>;
  });

  return <div className={widget.header}>{result}</div>;
};
