import widget from "./UserWiget.module.css";
import { Roles, User } from "../../app/types/user.ts";
import { users } from "../../assets/mock/crud-users.ts";
import classNames from "classnames";

type TableBody = [(string | number | Roles)[]];

export const UserWidget = () => {
  const headers = Object.keys(users[0]);
  headers.unshift("ch");

  return (
    <div className={widget.root}>
      <h4>User wiget CRUD operation</h4>
      <Headers headers={headers} />
      <ViewData />
      <FooterWidget />
    </div>
  );
};

const ViewData = () => {
  const viewCurrentData = (array: User[]) => {
    // Используем reduce для агрегации данных в двумерный массив
    const data = array.reduce(
      (acc, cur) => {
        // Для каждого пользователя создаем новый массив, содержащий его данные без ключей
        const userData = Object.values(cur).map((value) =>
          value instanceof Array ? value[0] : value,
        );
        acc.push(userData);
        return acc;
      },
      [] as unknown as TableBody,
    );
    return data;
  };

  const currentView = viewCurrentData(users).map((row) => {
    return <Row data={row} key={row.toString()} />;
  });

  return currentView;
};

const Row = (props: { data: (string | number | Roles)[] }) => {
  const result = props.data.map((tb) => {
    return (
      <div className={widget.cell} key={tb.toString()}>
        {renderCellContent(tb)}
      </div>
    );
  });
  return (
    <div className={widget.row}>
      <span className={widget.cell}>
        <Checkbox />
      </span>
      {result}
    </div>
  );
};

const Checkbox = () => {
  return <input type="radio" />;
};

const Headers = ({ headers }: { headers: string[] }) => {
  const result = headers.map((h) => {
    return (
      <div className={widget.item} key={h}>
        {h}
      </div>
    );
  });

  return <div className={widget.header}>{result}</div>;
};

const renderCellContent = (dataItem: string | number | Roles) => {
  switch (typeof dataItem) {
    case "string":
      return <span>{dataItem}</span>;
    case "number":
      return <span>{dataItem}</span>;
    case "object": {
      if (isAnyRolesIsExist(dataItem)) {
        const perm = getPermissions(dataItem);
        return <RolesComponent perm={perm} />;
      }
      break;
    }
    default:
      return null;
  }
};

const RolesComponent = ({ perm }: { perm: string[] }) => {
  return (
    <div>
      {perm.map((r) => (
        <span className={widget.permission} key={r}>
          {r.charAt(0).toUpperCase()}
        </span>
      ))}
    </div>
  );
};

const isAnyRolesIsExist = (props: Roles) => {
  return Object.keys(props).length;
};

const getPermissions = (props: Roles): string[] => {
  const permissions: string[] = [];
  for (const key in props) {
    permissions.push(key[0]);
  }
  return permissions;
};

const FooterWidget = () => {
  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const action = e.currentTarget.dataset.action;
  };

  return (
    <div className={widget.footer}>
      <div
        className={widget.item_control_user}
        data-action="add"
        onClick={(e) => clickHandler(e)}
      >
        <span className={classNames("material-symbols-outlined", widget.icon)}>
          person_add
        </span>
        <div className={classNames(widget.item_message_user)}>Add user</div>
      </div>
      <div
        className={widget.item_control_user}
        data-action="delete"
        onClick={(e) => clickHandler(e)}
      >
        <span className={classNames("material-symbols-outlined", widget.icon)}>
          person_remove
        </span>
        <div className={classNames(widget.item_message_user)}>Delete user</div>
      </div>
      <div
        className={widget.item_control_user}
        data-action="edit"
        onClick={(e) => clickHandler(e)}
      >
        <span className={classNames("material-symbols-outlined", widget.icon)}>
          person_edit
        </span>
        <div className={classNames(widget.item_message_user)}>Edit user</div>
      </div>
    </div>
  );
};
