import React from 'react'
import styles from '../styles/Todo.module.css'
import { useNavigate } from 'react-router-dom'

const Todolist = ({ Todo }) => {
    const navigate = useNavigate();
    return (
        <><div className={`${styles.supercont}`}>
            <div className={`${styles.main}`}>
                <h1 className='text-center text-[1.5rem]'>Todo list</h1>
                <div className={`${styles.maincont}`}>
                    <div className={`${styles.head}`}>
                        <h1>s.no</h1>
                        <h1>Title</h1>
                        <h1>Description</h1>
                    </div>

                    {Todo.length > 0 ? (<div className={`${styles.container}`}>{
                        Todo.map((action, index) => {
                            return (
                                <>
                                    <div key={index} className={`${styles.details}`}>
                                        <p>{index + 1}</p>
                                        <p>{action.title}</p>
                                        <p>{action.desc}</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>) : (<>
                        <div className={`${styles.container}`}>
                            <p className='text-center'>No Tasks Available</p>
                        </div>

                    </>)}

                    <div className={`${styles.btn}`}><button onClick={() => navigate("/todo/add")}>Add</button></div>
                </div>
            </div>

        </div>


        </>
    )
}

export default Todolist