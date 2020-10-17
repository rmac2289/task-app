import React, { useState } from "react";
import styles from "./Task.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCalendar } from '@fortawesome/free-solid-svg-icons'

export default function Task(props) {
  const [openDetails, setOpenDetails] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const toggleDetails = () => {
    return setOpenDetails(!openDetails);
  };
  const toggleEdit = () => {
    return setOpenEdit(!openEdit);
  };

  return (
    <div className={styles.task}>
      <div className={styles.headline}>
            <h3 className={styles.title}>{props.taskName}</h3>
            <p className={styles.p}>
              <strong>priority:</strong> {props.priority}
            </p>
            <p className={styles.p}>
            <FontAwesomeIcon icon={faCalendar}/> {props.deadline}
            </p>
            <p className={styles.p}>
               <FontAwesomeIcon icon={faClock}/> {props.Length}
            </p>
      </div>
      <div className={styles.details}>
      <p
          style={{ flex: 0.5, color: "grey", cursor: "pointer" }}
          onClick={() => toggleDetails()}
        >
          details
        </p>
      </div>
      {openDetails && <p>{props.details}</p>}
    </div>
  );
}
