import React from "react";
import styles from "./Task.module.scss";
import cx from "classnames";

interface ITaskItem {
  active: boolean;
  title: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  id: string;
}
export default function TaskItem({
  active,
  title,
  setSelected,
  id,
}: ITaskItem) {
  return (
    <span
      className={cx(styles.taskItem, { [styles.selected]: active })}
      onClick={() => setSelected(id)}
    >
      {title}
    </span>
  );
}
