import React, { useState } from 'react';
import styles from './Home.module.css';
import TaskList from './TaskList'

function Home() {
    const [category, setCategory] = useState("")
    const currCategory = (v) => {
        return setCategory(v)
    }
  return (
      <main>
        <div className={styles.categories}>
          <h3 onClick={() => currCategory("All")} className={styles.category}>All</h3>
          <h3 onClick={() => currCategory("Home")} className={styles.category}>Home</h3>
          <h3 onClick={() => currCategory("Work")} className={styles.category}>Work</h3>
          <h3 onClick={() => currCategory("Misc")} className={styles.category}>Misc</h3>
          <h3 onClick={() => currCategory("Other")} className={styles.category}>Other</h3>
        </div>
        <TaskList currCategory={category}/>
      </main>
  );
}

export default Home;