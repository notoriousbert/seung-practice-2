import React from "react";
import { Button, Card } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import styles from "./Task.module.scss";

export default function Task() {
  return (
    <Card interactive={true} elevation={2} className={styles.task}>
      <div className={styles.status}>
        <span className={styles.unassigned}> Unassigned </span>
        <span className={styles.assigned}> Assigned </span>
        <span className={styles.inProgress}> In Progress </span>
        <span className={styles.Complete}> Complete </span>
      </div>
      <Button intent="success" text="button content" />
    </Card>
  );
}
