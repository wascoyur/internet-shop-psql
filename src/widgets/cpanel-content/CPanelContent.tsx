import s from "./CPanelContent.module.css";
import widget from "../user-widget/UserWiget.module.css";
import { users } from "../../assets/mock/crud-users.ts";
import { Roles, User } from "../../app/types/user.ts";

type TableBody = [(string | number | Roles)[]];

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

  const extractData = (array: User[]) => {
    // Используем reduce для агрегации данных в двумерный массив
    const data = array.reduce(
      (acc, cur) => {
        // Для каждого пользователя создаем новый массив, содержащий его данные без ключей
        // type UserData={}
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

  return (
    <div className={widget.root}>
      <h4>User wiget CRUD operation</h4>
      <Headers headers={headers} />
      {extractData(users).map((row) => {
        return <Row data={row} />;
      })}
    </div>
  );
};

const Row = (props: { data: (string | number | Roles)[] }) => {
  const result = props.data.map((tb) => {
    return <div>{JSON.stringify(tb)}</div>;
  });

  return <div className={widget.row}>{result}</div>;
};

const Headers = ({ headers }: { headers: string[] }) => {
  const result = headers.map((h) => {
    return <div className={widget.item}>{h}</div>;
  });

  return <div className={widget.header}>{result}</div>;
};
