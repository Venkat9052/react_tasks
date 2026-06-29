import React, { useState, useRef } from 'react'
import styles from "../styles/Addtodo.module.css";
import { useNavigate } from 'react-router-dom'

const Addtodo = ({ addTodo }) => {
    const navigate = useNavigate();

    const Title = useRef();
    const Desc = useRef();

    const handleSubmit = () => {

        const isFormvalid = Title.current?.value.trim() &&
            Desc.current?.value.trim()

        if (isFormvalid) {
            const task = {
                title: Title.current.value.trim(),
                desc: Desc.current.value.trim()
            }
            addTodo(task);
            navigate("/todo");
            Title.current.value = "";
            Desc.current.value = ""
        }

    }

    return (
        <>
            <div className={`${styles.supercont}`}>
                <div className={`${styles.main}`}>
                    <div className={`${styles.head}`}>Add Task here....</div>
                    <div className={`${styles.inputs}`}>
                        <input type="text" placeholder=' ' id="title" ref={Title}></input>
                        <label htmlFor='title'>title  </label>
                    </div>
                    <div className={`${styles.inputs}`}>
                        <input type="text" placeholder=' ' id="desc" ref={Desc}></input>
                        <label htmlFor='desc'>description </label>
                    </div>
                    <div className={`${styles.btn}`}>
                        <button onClick={handleSubmit}>Add</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Addtodo