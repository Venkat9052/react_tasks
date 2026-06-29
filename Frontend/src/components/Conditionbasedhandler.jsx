import React from 'react'
import { useState, useRef } from 'react';
import styles from "../styles/condition.module.css"
import { Toaster, toast } from "sonner"

const Conditionbasedhandler = () => {
    const [show, setShow] = useState(false);
    const name = useRef(null);
    const email = useRef(null);
    const mobile = useRef(null);
    const branch = useRef(null);

    const eventhandler = (e) => {
        e.preventDefault();
        toast.success("User form submitted sucessfully", {
            style: {
                background: "#22c55e",
                color: "white",
                border: "1px solid #16a34a",
            },
        });
    }

    const onclickhandler = () => {
        setShow(!show);
    }

    return (
        <>
            <div className={`${styles.main}`}>
                <form onSubmit={eventhandler} className={`${styles.container}`} >
                    <h2 className={` ${styles.head}`}>Condition rendering</h2>
                    <div className={`${styles.inputs}`}>
                        <input type="text" id="name" placeholder=' ' ref={name}></input>
                        <label className='' htmlFor='name'>Name </label>
                    </div>
                    <div className={`${styles.inputs}`}>
                        <input type="text" id="email" placeholder=' ' ref={branch}></input>
                        <label className='' htmlFor='email'>Branch </label>
                    </div>

                    <div className={`${styles.inputs}`}>
                        <input type="email" id="email" placeholder=' ' ref={email}></input>
                        <label className='' htmlFor='email'>Email </label>
                    </div>
                    <div className={`${styles.inputs}`}>
                        <input type="text" id="email" placeholder=' ' ref={mobile}></input>
                        <label className='' htmlFor='email'>Mobile No </label>
                    </div>
                    <div className={`${styles.submit}`}>
                        <button type="submit">
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={onclickhandler}
                        >
                            Check details
                        </button>
                    </div>
                </form>

                <div className={`${styles.hide}`}>
                    {
                        show && (
                            <div className={`${styles.hidecontainer}`}>
                                <h3>Student details are </h3>
                                <div className={`${styles.details}`}>
                                    <p><span>Name</span>:{name.current.value}</p>
                                    <p><span>mobile</span>:{mobile.current.value}</p>
                                    <p><span>branch</span>:{branch.current.value}</p>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>

            <Toaster position="top-right" />
        </>
    )
}

export default Conditionbasedhandler