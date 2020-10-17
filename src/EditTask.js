import React from "react";
import styles from "./EditTask.module.css";

export default function EditTask(props) {
  return (
    <form className={styles.edit}>
      <input type="text" />
      <input type="date" />
      <textarea />
    </form>
  );
}
