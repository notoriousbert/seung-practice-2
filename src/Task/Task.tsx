import React, { useState } from "react";
import { Button, Card } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import styles from "./Task.module.scss";
import TaskItem from "./TaskItem";

export default function Task() {
  const [active, setActive] = useState();
  const [selected, setSelected] = useState("unassigned");

  const stateOfTask = [
    {
      id: "unassigned",
      title: "Unassigned",
    },
    {
      id: "assigned",
      title: "Assigned",
    },
    {
      id: "in-progress",
      title: "In Progress",
    },
    {
      id: "complete",
      title: "Complete",
    },
  ];

  return (
    <div>
      <Card interactive={true} elevation={2} className={styles.task}>
        <h2>Insert Task Name</h2>
        <h3>Insert Task Date</h3>
        <div>
          <div className={styles.status}>
            {stateOfTask.map((task) => (
              <span className={styles.taskStatusDims}>
                <TaskItem
                  title={task.title}
                  active={selected === task.id}
                  setSelected={setSelected}
                  id={task.id}
                />{" "}
              </span>
            ))}
          </div>
          <h4>Task Description:</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
            nesciunt! Velit neque quia quaerat, tempora delectus itaque
            temporibus ea debitis eius, reprehenderit tenetur accusamus! Et
            explicabo labore praesentium odit. Sint.
          </p>
        </div>
        <Button intent="primary" text="button content" />
      </Card>
    </div>
  );
}
