import widget from "./UserWiget.module.css";
import { addUser } from "../../shared/api/accountService.ts";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { getFormData, validateFields } from "./userWigetHelpers.ts";
import { User } from "../../app/types/user.ts";

export const FormRow = () => {
  const [isReadyToSend, setIsReadyToSend] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFirsNameValid, setIsFirsNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isRolesValid, setIsRolesValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  useEffect(() => {
    isEmailValid &&
      isPasswordValid &&
      isFirsNameValid &&
      isLastNameValid &&
      isPhoneValid &&
      setIsReadyToSend(true);
  }, [
    isEmailValid,
    isPasswordValid,
    isFirsNameValid,
    isLastNameValid,
    isRolesValid,
  ]);

  const handleChangeForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const isValid = validateFields(formData);
    isValid ? setIsReadyToSend(true) : setIsReadyToSend(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const userData = (): Omit<User, "id"> | undefined => {
      const data = getFormData(formData);

      const { email, password, phone, roles, lastName, firstName } = data;

      return { email, password, firstName, lastName, roles, phone, name };
    };

    if (!userData) {
      setIsReadyToSend(false);
      return;
    }

    await addUser(userData).then(() => setIsReadyToSend(false));
  };

  return (
    <div className={widget.user_row_form}>
      <form
        className={widget.user_form}
        onSubmit={handleSubmit}
        onChange={handleChangeForm}
      >
        <div
          className={classNames(
            widget.user_form_cell,
            isReadyToSend && !isEmailValid ? "invalid" : null,
          )}
        >
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
          <label form="firstname">first name</label>
          <input type="text" name="firstname" placeholder="first name" />
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

  return showForm ? <FormRow /> : null;
};
