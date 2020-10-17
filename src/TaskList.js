import React from 'react';
import styles from './TaskList.module.css';
import { data } from './MOCK_DATA';
import Task from './Task'

export default function TaskList(props){
    let taskItems = data.filter(v => {
        return props.currCategory === "All" || props.currCategory === "" ? v:
        v.Category === props.currCategory}).map((v) => {
        return <Task 
        key={v["Task Name"]}
        deadline={v.Deadline}
        taskName={v["Task Name"]}
        details={v.Details}
        priority={v.Priority}
        />
    })
    
    return (
        <ul className={styles.taskList}>
            {taskItems}
        </ul>
    )
}