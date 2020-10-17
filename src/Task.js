import React, { useState } from 'react';
import styles from './Task.module.css';


export default function Task(props){
    const [openDetails, setOpenDetails] = useState(false)
    const toggleDetails = () => {
        return setOpenDetails(!openDetails)
    }
    return (
        <div className={styles.task}>
            <div  className={styles.headline}>
            <p style={{flex: .5, color: "grey"}} onClick={() => toggleDetails()}>details</p>
                <h3 className={styles.title} >{props.taskName}</h3>
                <p className={styles.p}><strong>priority:</strong> {props.priority}</p>
                <p className={styles.p}><strong>deadline:</strong> {props.deadline}</p>
            </div>
            {openDetails &&
            <p>{props.details}</p>
}
        </div>
    )
}