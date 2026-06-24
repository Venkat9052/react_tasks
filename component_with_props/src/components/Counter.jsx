import React from 'react';
import styles from "../styles/counter.module.css";
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prev) => prev + 1);
    }

    const decrement = () => {
        setCount((prev) => prev > 0 ? prev - 1 : 0);
    };

    const resetting = () => {
        setCount(0);
    };

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.head}>
                        <h1 className={styles.value}>Count : {count}</h1>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.inc} onClick={increment}>increment ++</button>
                        <button className={styles.dec} onClick={decrement}>decrement --</button>
                        <button className={styles.reset} onClick={resetting}>reset </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Counter