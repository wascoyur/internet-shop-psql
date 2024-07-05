import widget from "./UserWiget.module.css";
import classNames from "classnames";

export const FooterWidget = ({
  setShowForm,
}: {
  setShowForm: (show: boolean) => void;
}) => {
  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const action = e.currentTarget.dataset.action;
    if (action === "add") {
      setShowForm(true);
    }
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
