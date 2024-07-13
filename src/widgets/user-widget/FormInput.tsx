import widget from "./UserWiget.module.css";
import { addUser } from "../../shared/api/accountService.ts";
import { useState } from "react";
import classNames from "classnames";
import { getFormData, ROLES_MAP } from "./userWigetHelpers.ts";
import { Roles, User } from "../../app/types/user.ts";

export type UserData = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  roles: string;
  phone: string;
  name: string;
  login: string;
};

type FormRow = {
  setShowForm: (arg0: boolean) => void;
};

export const FormRow = (props: FormRow) => {
  const [isReadyToSend, setIsReadyToSend] = useState(false);
  const [, setUserData] = useState<UserData | undefined>();

  const handleChangeForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: UserData | undefined = getFormData(formData);
    if (data) {
      setUserData(data);
      return setIsReadyToSend(true);
    }
    setIsReadyToSend(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = getFormData(formData);

    const userData = (arg: UserData): Omit<User, "id"> | undefined => {
      if (!arg) return;

      const {
        email,
        password,
        login,
        firstname,
        lastname,
        name,
        phone,
        roles: rolesValue,
      } = arg;

      const assignableRoles = [...new Set(rolesValue.toUpperCase().split(""))];

      const roles = (): Roles => {
        let rolesValue: Roles = { user: true };

        for (const [key, value] of Object.entries(ROLES_MAP)) {
          if (assignableRoles.includes(key)) {
            rolesValue = { ...rolesValue, [value.toLowerCase()]: true };
          }
        }
        return rolesValue;
      };

      return {
        email,
        password,
        login,
        firstName: firstname,
        lastName: lastname,
        role: roles(),
        phone,
        name,
      };
    };

    if (!data || !userData(data)) {
      setIsReadyToSend(false);
      return;
    }
    console.log(userData(data));
    try {
      await addUser(userData(data)).then(() => hideAddUserForm());
    } catch (e) {
      hideAddUserForm();
      console.log(e);
    }
  };

  const hideAddUserForm = () => {
    props.setShowForm(false);
    setIsReadyToSend(false);
  };

  return (
    <div className={widget.user_row_form}>
      <form
        className={widget.user_form}
        onSubmit={handleSubmit}
        onChange={handleChangeForm}
      >
        <div className={classNames(widget.user_form_cell)}>
          <label form="email">email</label>
          <input type="email" name="email" placeholder="email" />
        </div>
        <div className={widget.user_form_cell}>
          <label form="pass">pass</label>
          <input type="password" name="password" placeholder="password" />
        </div>
        <div className={widget.user_form_cell}>
          <label form="phone">phone</label>
          <input type="text" name="phone" placeholder="phone" />
        </div>
        <div className={widget.user_form_cell}>
          <label form="phone">login</label>
          <input type="text" name="login" placeholder="login" />
        </div>
        <div className={widget.user_form_cell}>
          <label form="firstname">first name</label>
          <input type="text" name="firstname" placeholder="first name" />
        </div>
        <div className={widget.user_form_cell}>
          <label form="name">name</label>
          <input type="text" name="name" placeholder="name" />
        </div>
        <div className={widget.user_form_cell}>
          <label form="lastname">Last name</label>
          <input type="text" name="lastname" placeholder="last name" />
        </div>
        <div className={widget.user_form_cell}>
          <label form="roles">roles</label>
          <input type="text" name="roles" placeholder="AUOM" />
        </div>
        <input type="submit" value="submit" disabled={!isReadyToSend} />
      </form>
    </div>
  );
};

type DataToAdd = {
  showForm: boolean;
  setShowForm: (showForm: boolean) => void;
};
export const DataToAdded = (props: DataToAdd) => {
  const { showForm, setShowForm } = props;

  return showForm ? <FormRow setShowForm={setShowForm} /> : null;
};
