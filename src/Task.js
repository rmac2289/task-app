import React, { useState } from "react";
import styles from "./Task.module.css";

export default function Task(props) {
  const [openDetails, setOpenDetails] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const toggleDetails = () => {
    return setOpenDetails(!openDetails);
  };
  const toggleEdit = () => {
    return setOpenEdit(!openEdit);
  };
  let options = [1, 2, 3, 4, 5];
  const selection = options.map((v) => {
    return (
      <option value={v} key={v}>
        {v}
      </option>
    );
  });
  return (
    <div className={styles.task}>
      <div className={styles.headline}>
        <p
          style={{ flex: 0.5, color: "grey", cursor: "pointer" }}
          onClick={() => toggleDetails()}
        >
          details
        </p>
        {!openEdit ? (
          <>
            <h3 className={styles.title}>{props.taskName}</h3>
            <p className={styles.p}>
              <strong>priority:</strong> {props.priority}
            </p>
            <p className={styles.p}>
              <strong>deadline:</strong> {props.deadline}
            </p>
          </>
        ) : (
          <>
            <input
              className={styles.title}
              type="text"
              placeholder={props.taskName}
            />
            <select className={styles.p}>{selection}</select>
            <input className={styles.p} type="date" />
          </>
        )}
      </div>
      {!openEdit ? (
        <p
          style={{ flex: 0.5, color: "grey", cursor: "pointer" }}
          onClick={() => toggleEdit()}
        >
          edit
        </p>
      ) : (
        <>
          <button type="submit">submit</button>
          <p
            onClick={() => toggleEdit()}
            style={{ flex: 0.5, color: "grey", cursor: "pointer" }}
          >
            cancel
          </p>
        </>
      )}

      {openDetails && <p>{props.details}</p>}
    </div>
  );
}
