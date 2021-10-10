import Task from "./Task/Task";
import styles from "./App.module.scss";
import cx from "classnames";

function App() {
  return (
    <div className={cx(styles.appContainer, styles.container)}>
      <Task />
    </div>
  );
}

export default App;
