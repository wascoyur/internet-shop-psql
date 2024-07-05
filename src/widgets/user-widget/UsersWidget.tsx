import widget from "./UserWiget.module.css";
import { useState } from "react";
import { Roles, User } from "../../app/types/user.ts";
import { users } from "../../assets/mock/crud-users.ts";
import { getPermissions, isAnyRolesIsExist } from "./userWigetHelpers.ts";
import { FooterWidget } from "./FooterWidget.tsx";
import { DataToAdded } from "./FormInput.tsx";

type TableBody = [(string | number | Roles)[]];

export const UserWidget = () => {
  const headers = Object.keys(users[0]);
  headers.unshift("ch");
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div className={widget.root}>
      <h4>User wiget CRUD operation</h4>
      <Headers headers={headers} />
      <ViewData />
      <DataToAdded showForm={showForm} setShowForm={setShowForm} />
      <FooterWidget setShowForm={setShowForm} />
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
    return <RowView data={row} key={row.toString()} />;
  });

  return currentView;
};

const RowView = (props: { data: (string | number | Roles)[] }) => {
  const { data } = props;
  const currentData = data.map((tb) => {
    return (
      <div className={widget.cell} key={tb.toString()}>
        {renderCellContent(tb)}
      </div>
    );
  });
  return (
    <div className={widget.row}>
      <span className={widget.cell}>
        <Checker />
      </span>
      {currentData}
    </div>
  );
};

const Checker = () => {
  return <input type="radio" checked={false} />;
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
